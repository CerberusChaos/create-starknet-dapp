import { mainnet } from '@starknet-react/chains';
import {
  argent,
  braavos,
  publicProvider,
  StarknetConfig,
  useInjectedConnectors,
  voyager,
} from '@starknet-react/core';
import type { ReactNode } from 'react';

export function StarknetProvider({ children }: { children: ReactNode }) {
  const { connectors } = useInjectedConnectors({
    recommended: [argent(), braavos()],
    includeRecommended: 'onlyIfNoConnectors',
  });

  return (
    <StarknetConfig
      chains={[mainnet]}
      provider={publicProvider()}
      connectors={connectors}
      explorer={voyager}
      autoConnect
    >
      {children}
    </StarknetConfig>
  );
}
