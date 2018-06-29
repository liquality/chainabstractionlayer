const Client = require('./')

const prettyPrintJson = (val) => console.log(JSON.stringify(val, null, 2))

const bitcoin = new Client('bitcoin://bitcoin:local321@localhost:18332/?timeout=200&version=0.12.0')

;(async function () {
  prettyPrintJson(await bitcoin.getBlockByNumber(3))
  // prettyPrintJson(await bitcoin.signMessage('a message?'))
})()
