import '../styles/global.css';

import type { AppProps } from 'next/app';

import { StarknetProvider } from '@/connectors/starknet-provider';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <StarknetProvider>
    <Component {...pageProps} />
  </StarknetProvider>
);

export default MyApp;
