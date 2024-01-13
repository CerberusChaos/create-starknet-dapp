import { useAccount, useConnect, useDisconnect } from '@starknet-react/core';
import { useMemo } from 'react';

import { installWallet } from '@/utils';

function WalletConnected() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  const shortenedAddress = useMemo(() => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }, [address]);

  return (
    <div className="text-sm font-medium">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn-wallet btn">
          {shortenedAddress}
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
        >
          <li>
            <a>
              {' '}
              <button onClick={() => disconnect()}>Disconnect</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function ConnectWallet() {
  const { connectors, connect } = useConnect();

  return (
    <div>
      <button
        className="btn-wallet btn text-sm font-medium"
        onClick={() =>
          (
            document.getElementById('my_modal_3') as HTMLDialogElement
          )?.showModal()
        }
      >
        Connect Wallet
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="text-lg font-bold text-black">Select Wallet</h3>
          <div className="join join-vertical mx-auto mt-7 flex w-2/3">
            {connectors.map((connector) => {
              return (
                <button
                  key={connector.id}
                  onClick={(e) => {
                    if (!connector.available()) {
                      installWallet(connector.id, e);
                    }
                    connect({ connector });
                  }}
                  className="btn join-item hover:bg-[#8B5FBF]"
                >
                  <img
                    className="mr-2 h-7 w-7"
                    src={`https://iconic.dynamic-static-assets.com/icons/sprite.svg#${connector.id.toLocaleLowerCase()}`}
                    alt="wallet"
                  />
                  Connect{' '}
                  {connector.id.charAt(0).toUpperCase() + connector.id.slice(1)}
                </button>
              );
            })}
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default function WalletBar() {
  const { address } = useAccount();

  return address ? <WalletConnected /> : <ConnectWallet />;
}
