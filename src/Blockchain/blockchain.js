const Block = require("../Block/block");

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock(data) {
    const lastBlock = this.chain[this.chain.length - 1];
    const newBlock = Block.mineBlock(lastBlock, data);
    this.chain.push(newBlock);

    return newBlock
  }

  isValidChain(chain){
    if(JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false

    for (let blockNumber = 1; blockNumber < chain.length; blockNumber++) {
      const newBlock = chain[blockNumber]
      const lastBlock = chain[blockNumber-1]

      // if(newBlock.lastHash !== lastBlock.hash || newBlock.hash !== Block.blockHash(newBlock)){
      //   return false
      // }
    }

    return true
  }
}

module.exports = Blockchain;
