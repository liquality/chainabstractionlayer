/*
 * BitcoinProvider class
 * with bitcoin related transforms
 */

export default class BitcoinProvider {
  setClient (client) {
    this.client = client
  }

  transforms () {
    return {
      methodToRpc (method, params) {
        return method.toLowerCase()
      },
      value (val, unit) {
        // convert hex to satoshi/mBTC/BTC
        return val
      }
    }
  }
}

BitcoinProvider.Types = {
  Block: {
    number: 'height',
    hash: 'hash',
    timestamp: 'time',
    difficulty: 'difficulty',
    size: 'size',
    parentHash: 'parentHash',
    nonce: 'nonce',
    exampleComputedValue: (key, result) => result.tx.reduce((value, tx) => value + tx.amount, 0)
  }
}
