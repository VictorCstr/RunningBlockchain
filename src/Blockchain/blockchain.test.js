const Block = require("../Block/block");
const Blockchain = require("./blockchain");

describe("Blockchain", () => {
  let blockChain;

  beforeEach(() => {
    blockChain = new Blockchain();
  });

  it("should starts genesis block", () => {
    expect(blockChain.chain[0]).toEqual(Block.genesis());
  });

  it("should add a new block in the chain", () => {
    const data = "transação 162 = R$562,00 transferidos ao João";
    blockChain.addBlock(data);
    expect(blockChain.chain[blockChain.chain.length-1].data).toEqual(data);
  });
});
