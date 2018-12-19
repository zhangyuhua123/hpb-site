export const ABI = [
  {
    "constant": false,
    "inputs": [],
    "name": "voteResult",
    "outputs": [
      {
        "name": "addr",
        "type": "address[]"
      },
      {
        "name": "facilityIds",
        "type": "bytes32[]"
      },
      {
        "name": "nums",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "endBlock",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_candidateAddr",
        "type": "address"
      },
      {
        "name": "_facilityId",
        "type": "string"
      },
      {
        "name": "_name",
        "type": "string"
      }
    ],
    "name": "updateCandidate",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getCandidateIndexArrayLength",
    "outputs": [
      {
        "name": "nums",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "round",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "candidateAddr",
        "type": "address"
      },
      {
        "name": "_snapshotBlock",
        "type": "uint256"
      }
    ],
    "name": "fechVoteResultForCandidateBySnapshotBlock",
    "outputs": [
      {
        "name": "addrs",
        "type": "address[]"
      },
      {
        "name": "nums",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "voterAddrs",
        "type": "address[]"
      },
      {
        "name": "_snapshotBalances",
        "type": "uint256[]"
      }
    ],
    "name": "setSnapshotBalanceBatch",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_startBlock",
        "type": "uint256"
      },
      {
        "name": "_endBlock",
        "type": "uint256"
      },
      {
        "name": "_capacity",
        "type": "uint256"
      },
      {
        "name": "_version",
        "type": "uint256"
      }
    ],
    "name": "updateContract",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "voterAddr",
        "type": "address"
      },
      {
        "name": "_snapshotBalance",
        "type": "uint256"
      }
    ],
    "name": "setSnapshotBalance",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "fechAllVoteResultForCurrent",
    "outputs": [
      {
        "name": "addrs",
        "type": "address[]"
      },
      {
        "name": "nums",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "voterAddrs",
        "type": "address[]"
      },
      {
        "name": "candidateAddrs",
        "type": "address[]"
      },
      {
        "name": "nums",
        "type": "uint256[]"
      }
    ],
    "name": "voteNoLockByAdminBatch",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "deleteAdmin",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "beginVote",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "candidateAddrs",
        "type": "address[]"
      },
      {
        "name": "nums",
        "type": "uint256[]"
      }
    ],
    "name": "voteNoLockBatch",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "MAX_UINT256",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_snapshotBlock",
        "type": "uint256"
      }
    ],
    "name": "fechAllCandidatesBySnapshotBlock",
    "outputs": [
      {
        "name": "addrs",
        "type": "address[]"
      },
      {
        "name": "names",
        "type": "bytes32[]"
      },
      {
        "name": "facilityIds",
        "type": "bytes32[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_snapshotBlock",
        "type": "uint256"
      }
    ],
    "name": "fechAllVotersBySnapshotBlock",
    "outputs": [
      {
        "name": "voterAddrs",
        "type": "address[]"
      },
      {
        "name": "snapshotBalances",
        "type": "uint256[]"
      },
      {
        "name": "voteNumbers",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "fechVoteMainInfo",
    "outputs": [
      {
        "name": "snapshotBalance",
        "type": "uint256"
      },
      {
        "name": "voteNumber",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "startBlock",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "fechCurrentSnapshotBlockIndex",
    "outputs": [
      {
        "name": "_index",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "version",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "candidateAddr",
        "type": "address"
      }
    ],
    "name": "fechVoteNumForCandidate",
    "outputs": [
      {
        "name": "num",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "candidateAddr",
        "type": "address"
      },
      {
        "name": "num",
        "type": "uint256"
      }
    ],
    "name": "cancelVoteForCandidate",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "capacity",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "candidateAddr",
        "type": "address"
      },
      {
        "name": "num",
        "type": "uint256"
      }
    ],
    "name": "voteNoLock",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getCandidateIndexArray",
    "outputs": [
      {
        "name": "nums",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "addAdmin",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "fechSnapshotBlockByIndex",
    "outputs": [
      {
        "name": "_snapshotBlock",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "candidateAddr",
        "type": "address"
      },
      {
        "name": "_snapshotBlock",
        "type": "uint256"
      }
    ],
    "name": "fechVoteNumForCandidateBySnapshotBlock",
    "outputs": [
      {
        "name": "num",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_snapshotBlock",
        "type": "uint256"
      }
    ],
    "name": "fechVoteMainInfoBySnapshotBlock",
    "outputs": [
      {
        "name": "snapshotBalance",
        "type": "uint256"
      },
      {
        "name": "voteNumber",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getVoteResult",
    "outputs": [
      {
        "name": "addr",
        "type": "address[]"
      },
      {
        "name": "facilityIds",
        "type": "bytes32[]"
      },
      {
        "name": "nums",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_snapshotBlock",
        "type": "uint256"
      }
    ],
    "name": "changeStageBlock",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_round",
        "type": "uint256"
      }
    ],
    "name": "setRound",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "currentSnapshotBlock",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "voterAddr",
        "type": "address"
      },
      {
        "name": "_snapshotBlock",
        "type": "uint256"
      }
    ],
    "name": "fechVoteInfoForVoterBySnapshotBlock",
    "outputs": [
      {
        "name": "addrs",
        "type": "address[]"
      },
      {
        "name": "nums",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_candidateAddr",
        "type": "address"
      }
    ],
    "name": "deleteCandidates",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "endVote",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_block",
        "type": "uint256"
      }
    ],
    "name": "fechAllVoteResultPreStageByBlock",
    "outputs": [
      {
        "name": "fromBlock",
        "type": "uint256"
      },
      {
        "name": "toBlock",
        "type": "uint256"
      },
      {
        "name": "addrs",
        "type": "address[]"
      },
      {
        "name": "nums",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "voterAddr",
        "type": "address"
      }
    ],
    "name": "fechVoteInfoForVoter",
    "outputs": [
      {
        "name": "addrs",
        "type": "address[]"
      },
      {
        "name": "nums",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "voterAddr",
        "type": "address"
      },
      {
        "name": "candidateAddr",
        "type": "address"
      },
      {
        "name": "num",
        "type": "uint256"
      }
    ],
    "name": "voteNoLockByAdmin",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "resetHasAutoVote",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "adminMap",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_candidateAddr",
        "type": "address"
      },
      {
        "name": "_facilityId",
        "type": "string"
      },
      {
        "name": "_name",
        "type": "string"
      }
    ],
    "name": "addCandidate",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_candidateAddr",
        "type": "address"
      },
      {
        "name": "_snapshotBlock",
        "type": "uint256"
      }
    ],
    "name": "deleteCandidateBySnapshotBlock",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "candidateIndexArray",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "hasAutoVote",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_snapshotBlock",
        "type": "uint256"
      }
    ],
    "name": "fechAllVoteResultBySnapshotBlock",
    "outputs": [
      {
        "name": "addrs",
        "type": "address[]"
      },
      {
        "name": "nums",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "voteStages",
    "outputs": [
      {
        "name": "snapshotBlock",
        "type": "uint256"
      },
      {
        "name": "createSnapshotBlock",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_snapshotBlock",
        "type": "uint256"
      }
    ],
    "name": "fechStageIndexBySnapshotBlock",
    "outputs": [
      {
        "name": "_index",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "candidateAddr",
        "type": "address"
      }
    ],
    "name": "fechVoteResultForCandidate",
    "outputs": [
      {
        "name": "addr",
        "type": "address[]"
      },
      {
        "name": "nums",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "_startBlock",
        "type": "uint256"
      },
      {
        "name": "_endBlock",
        "type": "uint256"
      },
      {
        "name": "_capacity",
        "type": "uint256"
      },
      {
        "name": "_version",
        "type": "uint256"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "candidateAddr",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "facilityId",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "name",
        "type": "string"
      }
    ],
    "name": "CandidateAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "candidateAddr",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "facilityId",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "name",
        "type": "string"
      }
    ],
    "name": "CandidateUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "candidateAddr",
        "type": "address"
      }
    ],
    "name": "CandidateDeleted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "index",
        "type": "uint256"
      },
      {
        "indexed": true,
        "name": "voteAddr",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "candidateAddr",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "num",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "flag",
        "type": "uint256"
      }
    ],
    "name": "DoVoted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "version",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "startBlock",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "endBlock",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "capacity",
        "type": "uint256"
      }
    ],
    "name": "UpdateContract",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "preStageBlock",
        "type": "uint256"
      },
      {
        "indexed": true,
        "name": "stageBlock",
        "type": "uint256"
      }
    ],
    "name": "ChangeStageBlock",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "voteStageIndex",
        "type": "uint256"
      },
      {
        "indexed": true,
        "name": "voterAddr",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_snapshotBalance",
        "type": "uint256"
      }
    ],
    "name": "SetSnapshotBalance",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "voterAddr",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "candidateAddr",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "num",
        "type": "uint256"
      }
    ],
    "name": "VoteNoLockByAdminInvokeDoVoted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "ReceivedHpb",
    "type": "event"
  }
]
