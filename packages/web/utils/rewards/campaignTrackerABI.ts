// @ts-nocheck
// @ts-nocheck
export const campaignTrackerABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "campaignId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "campaignString",
        type: "string",
      },
      { indexed: false, internalType: "bool", name: "isActive", type: "bool" },
    ],
    name: "CampaignRewardToggled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "campaignId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "campaignString",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardPerMille",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "manager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "royaltyReceiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "royaltyPerMille",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxAllowanceInOP",
        type: "uint256",
      },
      { indexed: false, internalType: "bool", name: "isActive", type: "bool" },
    ],
    name: "CampaignSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint8", name: "version", type: "uint8" },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "erc721",
        type: "address",
      },
    ],
    name: "OptimismOGERC721Added",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "erc721",
        type: "address",
      },
    ],
    name: "OptimismOGERC721Removed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "cancelledPotentialOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferFinalized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "potentialOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferInitiated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "rewardWrapper",
        type: "address",
      },
    ],
    name: "RewardWrapperSet",
    type: "event",
  },
  {
    inputs: [],
    name: "BASELINE_CAMPAIGN_ID",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "OPTIMISM_OG_CAMPAIGN_ID",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptOwnershipTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_erc721", type: "address" }],
    name: "addOptimismOGERC721",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cancelOwnershipTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "_campaignString", type: "string" },
    ],
    name: "getCampaign",
    outputs: [
      {
        components: [
          { internalType: "string", name: "campaignString", type: "string" },
          { internalType: "uint256", name: "rewardPerMille", type: "uint256" },
          { internalType: "address", name: "manager", type: "address" },
          { internalType: "address", name: "royaltyReceiver", type: "address" },
          { internalType: "uint256", name: "royaltyPerMille", type: "uint256" },
          {
            internalType: "uint256",
            name: "maxAllowanceInOP",
            type: "uint256",
          },
          { internalType: "bool", name: "isActive", type: "bool" },
        ],
        internalType: "struct Campaign",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOptimismOGERC721s",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "_campaignString", type: "string" },
      {
        internalType: "uint256",
        name: "_considerationAmountInOP",
        type: "uint256",
      },
    ],
    name: "getRewardAmountInOP",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_owner", type: "address" },
      {
        internalType: "contract IRewardWrapper",
        name: "_rewardWrapper",
        type: "address",
      },
      {
        components: [
          { internalType: "string", name: "campaignString", type: "string" },
          { internalType: "uint256", name: "rewardPerMille", type: "uint256" },
          { internalType: "address", name: "manager", type: "address" },
          { internalType: "address", name: "royaltyReceiver", type: "address" },
          { internalType: "uint256", name: "royaltyPerMille", type: "uint256" },
          {
            internalType: "uint256",
            name: "maxAllowanceInOP",
            type: "uint256",
          },
          { internalType: "bool", name: "isActive", type: "bool" },
        ],
        internalType: "struct Campaign[]",
        name: "_campaigns",
        type: "tuple[]",
      },
      {
        internalType: "address[]",
        name: "_optimismOGERC721s",
        type: "address[]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "initiateOwnershipTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_address", type: "address" }],
    name: "isOptimismOGHolder",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "potentialOwner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_erc721", type: "address" }],
    name: "removeOptimismOGERC721",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardWrapper",
    outputs: [
      { internalType: "contract IRewardWrapper", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "_campaignString", type: "string" },
      { internalType: "uint256", name: "_rewardPerMille", type: "uint256" },
      { internalType: "address", name: "_manager", type: "address" },
      { internalType: "address", name: "_royaltyReceiver", type: "address" },
      { internalType: "uint256", name: "_royaltyPerMille", type: "uint256" },
      { internalType: "uint256", name: "_maxAllowanceInOP", type: "uint256" },
      { internalType: "bool", name: "_isActive", type: "bool" },
    ],
    name: "setCampaign",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IRewardWrapper",
        name: "_rewardWrapper",
        type: "address",
      },
    ],
    name: "setRewardWrapper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "_campaignString", type: "string" },
    ],
    name: "toggleRewardsForCampaign",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
