const crypto = require("crypto");

class Block {
  constructor(timestamp, lastHash, hash, data) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  toString() {
    return ` 
            Block = 
                Timestamp = ${this.timestamp}
                LastHash = ${this.lastHash}
                Hash = ${this.hash}
                Data = ${this.data}
        `;
  }

  static genesis() {
    return new this(
      "Genesis time",
      "----------------------------------------------------------------",
      Block.hash(
        "Genesis Time",
        "----------------------------------------------------------------",
        []
      ),
      []
    );
  }

  static mineBlock(lastBlock, data) {
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;
    const hash = Block.hash(timestamp, lastHash, data);

    return new this(timestamp, lastHash, hash, data);
  }

  static hash(timestamp, lastHash, data) {
    const hash = crypto.createHash("sha256", process.env.SECRET_HASH);
    hash.update(timestamp.toString(), lastHash.toString(), data.toString());
    return hash.digest("hex");
  }

  static blockHash(block) {
    const { timestamp, lastHash, data } = block;
    return Block.hash(timestamp, lastHash, data);
  }
}

module.exports = Block;
