import BitcoinLedgerProvider from '@liquality/bitcoin-ledger-provider'
import BitcoinRpcProvider from '@liquality/bitcoin-rpc-provider'
import BitcoinNodeWalletProvider from '@liquality/bitcoin-node-wallet-provider'
import BitcoinJsWalletProvider from '@liquality/bitcoin-js-wallet-provider'
import BitcoinSwapProvider from '@liquality/bitcoin-swap-provider'
import BitcoinEsploraApiProvider from '@liquality/bitcoin-esplora-api-provider'
import BitcoinEsploraSwapFindProvider from '@liquality/bitcoin-esplora-swap-find-provider'
import * as BitcoinNetworks from '@liquality/bitcoin-networks'
import * as BitcoinUtils from '@liquality/bitcoin-utils'

import EthereumErc20Provider from '@liquality/ethereum-erc20-provider'
import EthereumErc20SwapProvider from '@liquality/ethereum-erc20-swap-provider'
import EthereumLedgerProvider from '@liquality/ethereum-ledger-provider'
import EthereumMetaMaskProvider from '@liquality/ethereum-metamask-provider'
import EthereumWalletConnectProvider from '@liquality/ethereum-wallet-connect-provider'
import EthereumJsWalletProvider from '@liquality/ethereum-js-wallet-provider'
import EthereumRpcProvider from '@liquality/ethereum-rpc-provider'
import EthereumSwapProvider from '@liquality/ethereum-swap-provider'
import EthereumBlockscoutSwapFindProvider from '@liquality/ethereum-blockscout-swap-find-provider'
import EthereumScraperSwapFindProvider from '@liquality/ethereum-scraper-swap-find-provider'
import EthereumErc20ScraperSwapFindProvider from '@liquality/ethereum-erc20-scraper-swap-find-provider'
import * as EthereumNetworks from '@liquality/ethereum-networks'
import * as EthereumUtils from '@liquality/ethereum-utils'

const bitcoin = {
  BitcoinLedgerProvider,
  BitcoinRpcProvider,
  BitcoinNodeWalletProvider,
  BitcoinJsWalletProvider,
  BitcoinSwapProvider,
  BitcoinEsploraApiProvider,
  BitcoinEsploraSwapFindProvider,
  BitcoinNetworks,
  BitcoinUtils,
  networks: BitcoinNetworks
}

const ethereum = {
  EthereumErc20Provider,
  EthereumErc20SwapProvider,
  EthereumLedgerProvider,
  EthereumMetaMaskProvider,
  EthereumWalletConnectProvider,
  EthereumJsWalletProvider,
  EthereumRpcProvider,
  EthereumSwapProvider,
  EthereumBlockscoutSwapFindProvider,
  EthereumScraperSwapFindProvider,
  EthereumErc20ScraperSwapFindProvider,
  EthereumNetworks,
  EthereumUtils,
  networks: EthereumNetworks
}

export {
  bitcoin,
  ethereum
}
