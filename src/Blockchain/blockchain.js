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
    // Corrente que está vindo tem o bloco genesis diferente do Inicial
    if(JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false

    for (let blockNumber = 1; blockNumber < chain.length; blockNumber++) {
      const newBlock = chain[blockNumber]
      const lastBlock = chain[blockNumber-1]

      // Novo bloco tem o hash diferente do bloco anterior ou teve algum dado alterado durante o processo (rodamos a mineração denovo para validar)
      if(newBlock.lastHash !== lastBlock.hash || newBlock.hash !== Block.blockHash(newBlock)){
        return false
      }
    }

    return true
  }

   replaceChain(newChain){
    if(newChain.length <= this.chain.length){
      throw new Error ('Received chain is not longer than the current chain')
    }
    else if(this.isValidChain(newChain) == false){
      throw new Error('Received chain is not valid')
    }
    this.chain = newChain
  }
}

module.exports = Blockchain;
