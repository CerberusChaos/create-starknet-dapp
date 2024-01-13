import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { devnet, goerli, mainnet } from "@starknet-react/chains";
import {
  StarknetConfig,
  argent,
  braavos,
  publicProvider,
  useInjectedConnectors,
} from "@starknet-react/core";
import "./index.css";

function Root({ children }) {
  const chains = [goerli, mainnet, devnet];
  const provider = publicProvider();
  const { connectors } = useInjectedConnectors({
    recommended: [argent(), braavos()],
  });

  return (
    <StarknetConfig
      autoConnect
      chains={chains}
      provider={provider}
      connectors={connectors}
    >
      {children}
    </StarknetConfig>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root>
      <App />
    </Root>
  </React.StrictMode>
);
