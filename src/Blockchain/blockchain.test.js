const Block = require("../Block/block");
const Blockchain = require("./blockchain");

describe("Blockchain", () => {
  let blockChain;
  let blockChain2;

  beforeEach(() => {
    blockChain = new Blockchain();
    blockChain2 = new Blockchain();
  });

  it("should starts genesis block", () => {
    expect(blockChain.chain[0]).toEqual(Block.genesis());
  });

  it("should add a new block in the chain", () => {
    const data = "transação 162 = R$562,00 transferidos ao João";
    blockChain.addBlock(data);
    expect(blockChain.chain[blockChain.chain.length - 1].data).toEqual(data);
  });

  it("should validate the chain", () => {
    blockChain2.addBlock("R$500")
    expect(blockChain.isValidChain(blockChain2.chain)).toBe(true)
  });

  it("should invalidate the chain with a genesis block corrupted", () => {
    blockChain2.chain[0].data = "R$0"
    expect(blockChain.isValidChain(blockChain2) ).toBe(false)
  });

  // Fazemos a função de Add Block que irá ter um data. Mas depois definimos outro data oq não vai dar certo com o método de BlockHash
  it("should invalidate the chain with a block that contains data invalid", () => {
    blockChain2.addBlock("R$200")
    blockChain2.chain[1].data = "R$0"
    expect(blockChain.isValidChain(blockChain2)).toBe(false)
  });

  it("should replaces the chain with a valid chain", () => {
    blockChain2.addBlock("R$200")
    blockChain.replaceChain(blockChain2.chain)
    expect(blockChain.chain).toEqual(blockChain2.chain)
  });

  it("should throw an Error while trying to replace a child with same length", () => {
    expect( ()  => blockChain.replaceChain(blockChain2.chain)).toThrow('Received chain is not longer than the current chain')
  });
});
