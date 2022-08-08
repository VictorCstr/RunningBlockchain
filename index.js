const Block = require('./block')

const newBlock = new Block('1244', '0000AF9CMAS', '000021NSA09CX', '1000')

console.log(newBlock.toString())

console.log(Block.genesis().toString())

const primeiroBloco = Block.mineBlock(Block.genesis(), '$500')

console.log(primeiroBloco.toString())