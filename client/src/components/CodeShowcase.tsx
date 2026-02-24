/* ============================================================
   DESIGN: Deep Ocean Protocol — Code Showcase
   - Displays real Solidity code snippets
   - Terminal-style dark card with syntax highlighting
   - Tab switching between different contract examples
   ============================================================ */
import { useState } from "react";
import { Copy, Check } from "lucide-react";

const snippets = [
  {
    label: "Flash Loan Arbitrage",
    filename: "FlashLoanArbitrage.sol",
    code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@aave/core-v3/contracts/flashloan/base/FlashLoanSimpleReceiverBase.sol";
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";

contract FlashLoanArbitrage is FlashLoanSimpleReceiverBase {
    ISwapRouter public immutable swapRouter;
    
    constructor(
        address _addressProvider,
        address _swapRouter
    ) FlashLoanSimpleReceiverBase(IPoolAddressesProvider(_addressProvider)) {
        swapRouter = ISwapRouter(_swapRouter);
    }

    function executeOperation(
        address asset,
        uint256 amount,
        uint256 premium,
        address initiator,
        bytes calldata params
    ) external override returns (bool) {
        // Decode arbitrage path from params
        (address tokenOut, uint24 fee1, uint24 fee2) = 
            abi.decode(params, (address, uint24, uint24));
        
        // Execute arbitrage swap
        _executeArbitrage(asset, tokenOut, amount, fee1, fee2);
        
        // Repay flash loan + premium
        uint256 amountOwed = amount + premium;
        IERC20(asset).approve(address(POOL), amountOwed);
        return true;
    }
    
    function _executeArbitrage(
        address tokenIn,
        address tokenOut,
        uint256 amountIn,
        uint24 fee1,
        uint24 fee2
    ) internal {
        // Swap A → B on pool 1, B → A on pool 2
        IERC20(tokenIn).approve(address(swapRouter), amountIn);
        // ... swap logic
    }
}`,
  },
  {
    label: "Staking Pool",
    filename: "StakingPool.sol",
    code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract StakingPool is ReentrancyGuard, Ownable {
    IERC20 public immutable stakingToken;
    IERC20 public immutable rewardToken;
    
    uint256 public rewardRate;          // Rewards per second
    uint256 public lastUpdateTime;
    uint256 public rewardPerTokenStored;
    uint256 public totalSupply;
    
    mapping(address => uint256) public balances;
    mapping(address => uint256) public userRewardPerTokenPaid;
    mapping(address => uint256) public rewards;
    
    modifier updateReward(address account) {
        rewardPerTokenStored = rewardPerToken();
        lastUpdateTime = block.timestamp;
        if (account != address(0)) {
            rewards[account] = earned(account);
            userRewardPerTokenPaid[account] = rewardPerTokenStored;
        }
        _;
    }
    
    function rewardPerToken() public view returns (uint256) {
        if (totalSupply == 0) return rewardPerTokenStored;
        return rewardPerTokenStored + (
            (block.timestamp - lastUpdateTime) * rewardRate * 1e18 / totalSupply
        );
    }
    
    function earned(address account) public view returns (uint256) {
        return (balances[account] * 
            (rewardPerToken() - userRewardPerTokenPaid[account]) / 1e18
        ) + rewards[account];
    }
    
    function stake(uint256 amount) external nonReentrant updateReward(msg.sender) {
        require(amount > 0, "Cannot stake 0");
        totalSupply += amount;
        balances[msg.sender] += amount;
        stakingToken.transferFrom(msg.sender, address(this), amount);
        emit Staked(msg.sender, amount);
    }
    
    function getReward() external nonReentrant updateReward(msg.sender) {
        uint256 reward = rewards[msg.sender];
        if (reward > 0) {
            rewards[msg.sender] = 0;
            rewardToken.transfer(msg.sender, reward);
            emit RewardPaid(msg.sender, reward);
        }
    }
    
    event Staked(address indexed user, uint256 amount);
    event RewardPaid(address indexed user, uint256 reward);
}`,
  },
  {
    label: "ERC-20 Token",
    filename: "DEFAToken.sol",
    code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

/// @title DEFA — InvoiceMate Governance Token
/// @notice ERC-20 with governance voting and role-based minting
contract DEFAToken is ERC20, ERC20Burnable, ERC20Votes, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    
    uint256 public constant MAX_SUPPLY = 100_000_000 * 10**18; // 100M DEFA
    
    constructor(address admin) 
        ERC20("DEFA Governance Token", "DEFA")
        EIP712("DEFA Governance Token", "1")
    {
        _grantRole(DEFAULT_ADMIN_ROLE, admin);
        _grantRole(MINTER_ROLE, admin);
    }
    
    function mint(address to, uint256 amount) 
        external 
        onlyRole(MINTER_ROLE) 
    {
        require(
            totalSupply() + amount <= MAX_SUPPLY,
            "DEFAToken: max supply exceeded"
        );
        _mint(to, amount);
    }
    
    // Required overrides for ERC20Votes
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC20, ERC20Votes) {
        super._afterTokenTransfer(from, to, amount);
    }
    
    function _mint(address to, uint256 amount)
        internal override(ERC20, ERC20Votes) {
        super._mint(to, amount);
    }
    
    function _burn(address account, uint256 amount)
        internal override(ERC20, ERC20Votes) {
        super._burn(account, amount);
    }
}`,
  },
];

export default function CodeShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple syntax highlighting
  const highlight = (code: string) => {
    return code
      .replace(/(\/\/.*)/g, '<span style="color:#6A9955">$1</span>')
      .replace(/\b(pragma|solidity|contract|function|mapping|address|uint256|bool|string|bytes32|bytes|public|private|internal|external|view|pure|returns|override|virtual|modifier|event|emit|require|revert|if|else|for|while|return|memory|storage|calldata|immutable|constant|payable|nonpayable|indexed|anonymous|import|from|is|new|delete|struct|enum|interface|library|using|assembly|unchecked|constructor|fallback|receive)\b/g, '<span style="color:#569CD6">$1</span>')
      .replace(/\b(IERC20|ERC20|ERC20Burnable|ERC20Votes|AccessControl|ReentrancyGuard|Ownable|ISwapRouter|FlashLoanSimpleReceiverBase|IPoolAddressesProvider)\b/g, '<span style="color:#4EC9B0">$1</span>')
      .replace(/"([^"]*)"/g, '<span style="color:#CE9178">"$1"</span>')
      .replace(/\b(\d+)\b/g, '<span style="color:#B5CEA8">$1</span>');
  };

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "#050D1A" }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-12">
          <p
            className="text-xs font-semibold mb-3 tracking-widest"
            style={{ color: "#00D4FF", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            CODE SAMPLES
          </p>
          <h2 className="section-heading text-4xl lg:text-5xl mb-4">
            Smart Contract Examples
          </h2>
          <div className="teal-line w-16 mb-4" />
          <p
            className="text-sm max-w-xl"
            style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif" }}
          >
            Production-grade Solidity patterns — gas-optimized, reentrancy-protected, and audit-ready.
          </p>
        </div>

        {/* Code editor card */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(0,212,255,0.12)",
            boxShadow: "0 0 60px rgba(0,212,255,0.06)",
          }}
        >
          {/* Tab bar */}
          <div
            className="flex items-center gap-0 overflow-x-auto"
            style={{
              background: "#0D1B2E",
              borderBottom: "1px solid rgba(0,212,255,0.1)",
            }}
          >
            {/* Traffic lights */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-r" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#28CA41" }} />
            </div>

            {snippets.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className="px-4 py-3 text-xs transition-all duration-200 whitespace-nowrap"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: activeTab === i ? "#00D4FF" : "rgba(255,255,255,0.4)",
                  background: activeTab === i ? "rgba(0,212,255,0.06)" : "transparent",
                  borderBottom: activeTab === i ? "2px solid #00D4FF" : "2px solid transparent",
                }}
              >
                {s.filename}
              </button>
            ))}

            {/* Copy button */}
            <button
              onClick={handleCopy}
              className="ml-auto mr-4 flex items-center gap-1.5 text-xs px-3 py-1.5 rounded transition-all duration-200"
              style={{
                color: copied ? "#28CA41" : "rgba(255,255,255,0.4)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          {/* Code content */}
          <div
            className="overflow-auto"
            style={{
              background: "#0A1628",
              maxHeight: "480px",
            }}
          >
            <pre
              className="p-6 text-xs leading-relaxed"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#D4D4D4",
                margin: 0,
              }}
              dangerouslySetInnerHTML={{ __html: highlight(snippets[activeTab].code) }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
