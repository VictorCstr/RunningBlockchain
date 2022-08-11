const Block = require('./Block/block')
const Blockchain = require('./Blockchain/blockchain')

const newBlock = new Block('1244', '0000AF9CMAS', '000021NSA09CX', '1000')

const primeiroBloco = Block.mineBlock(Block.genesis(), '$500')

console.log(Blockchain.chain)
