import starknetLogo from "/starknet.svg";

import { useConnect, useAccount, useDisconnect } from "@starknet-react/core";
import "./App.css";

function App() {
  const { address } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <>
      <div>
        <a href="https://starknet.io" target="_blank">
          <img src={starknetLogo} className="logo" alt="Starknet logo" />
        </a>
      </div>
      <h1>Starknet Dapp React Ts</h1>
      <div className="card-wrap">
        <div className="card">
          {address ? (
            <>
              <p>Address: {address}</p>
              <button onClick={() => disconnect()}>Disconnect</button>
            </>
          ) : (
            connectors.map((connector) => {
              return (
                <button
                  key={connector.id}
                  onClick={async () =>
                    connector.available() ? connect({ connector }) : null
                  }
                  disabled={!connector.available()}
                  className="card-item"
                >
                  {connector.icon.light && <img src={connector.icon.dark} />}
                  <p className="">Connect {connector.name}</p>
                </button>
              );
            })
          )}
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Starknet logos to learn more</p>
    </>
  );
}

export default App;
