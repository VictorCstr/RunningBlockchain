const Block = require('./block')

describe('Block on the Blockchain', () =>{

    let newData, lastBlock, newBlock;

    beforeEach(() =>{
        newData = "Contrato imobiliário assinado";
        lastBlock = Block.genesis();
        newBlock = Block.mineBlock(lastBlock, newData);
    });

    it("should match data", () =>{
        expect(newBlock.data).toEqual(newData)
    });

    it('should match hashs', () =>{
        expect(newBlock.lastHash).toEqual(lastBlock.hash)
    });
})