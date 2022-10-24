import aptosLogo from 'assets/aptos_logo.svg'
import { Coin } from 'hooks/common/Coin'

import { SupportedChainId } from './chains'
import { APTOS_CoinInfo, APTOS_DEVNET_CoinInfo, APTOS_TESTNET_CoinInfo } from './coinInfo'

interface BaseChainInfo {
  readonly docs: string
  readonly bridge?: string
  readonly explorer: string
  readonly logoUrl: string
  readonly label: string
  readonly helpCenterUrl?: string
  readonly nativeCoin: Coin
  readonly stableCoin: Coin
  readonly color?: string
  readonly backgroundColor?: string
}

export type ChainInfoMap = { readonly [chainId: number]: BaseChainInfo }

const CHAIN_INFO: ChainInfoMap = {
  [SupportedChainId.APTOS]: {
    bridge: 'https://cbridge.celer.network/1/12360001/USDC',
    docs: 'https://aptoslabs.com/',
    explorer: 'https://explorer.aptoslabs.com/?network=mainnet',
    label: 'Aptos',
    logoUrl: aptosLogo,
    nativeCoin: APTOS_CoinInfo['0x1::aptos_coin::AptosCoin'],
    stableCoin: APTOS_CoinInfo['0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC'],
  },
  [SupportedChainId.APTOS_TESTNET]: {
    bridge: 'https://cbridge-aptos-testnet.netlify.app/',
    docs: 'https://aptoslabs.com/',
    explorer: 'https://explorer.aptoslabs.com/?network=testnet',
    label: 'AptosTest',
    logoUrl: aptosLogo,
    nativeCoin: APTOS_TESTNET_CoinInfo['0x1::aptos_coin::AptosCoin'],
    stableCoin:
      APTOS_TESTNET_CoinInfo['0x801ccf2187d7c75da60294212613a29ea90d37abc5c98feefffcbcf87739ae57::TestCoinsV1::USDT'],
  },
  [SupportedChainId.APTOS_DEVNET]: {
    bridge: 'https://cbridge-aptos-devnet.netlify.app/',
    docs: 'https://aptoslabs.com/',
    explorer: 'https://explorer.aptoslabs.com/?network=devnet',
    label: 'AptosDev',
    logoUrl: aptosLogo,
    nativeCoin: APTOS_DEVNET_CoinInfo['0x1::aptos_coin::AptosCoin'],
    stableCoin:
      APTOS_DEVNET_CoinInfo['0x801ccf2187d7c75da60294212613a29ea90d37abc5c98feefffcbcf87739ae57::TestCoinsV1::USDT'],
  },
}

export function getChainInfo(chainId: SupportedChainId): BaseChainInfo {
  if (chainId) {
    return CHAIN_INFO[chainId] ?? undefined
  }
  return undefined
}

export function getChainInfoOrDefault(chainId: number | undefined) {
  return getChainInfo(chainId) ?? CHAIN_INFO[SupportedChainId.APTOS]
}
