const cryptoHash = require('./crypto-hash');

const timestamp = Date.now();
const lastHash = null;
const data = 'This is the first block, AKA: Genesis NaJa...';
const GENESIS_DATA = {
  timestamp: timestamp,
  lastHash: lastHash,
  hash: cryptoHash(timestamp, lastHash, data),
  data: data,
};

module.exports = {
  GENESIS_DATA
};