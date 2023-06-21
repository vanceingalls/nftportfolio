import { Network, Alchemy, OwnedNft } from "alchemy-sdk";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { NFT } from "./NFT";

export const Gallery = () => {
  const [nfts, setNfts] = useState<OwnedNft[]>([]);
  const { address } = useAccount();

  useEffect(() => {
    if (!address) return setNfts([]);
    const alchemy = new Alchemy({
      apiKey: process.env.ALCHEMY_API_KEY, // Replace with your Alchemy API Key.
      network: Network.ETH_MAINNET, // Replace with your network.
    });

    (async () => {
      // Print all NFTs returned in the response:
      const { ownedNfts } = await alchemy.nft.getNftsForOwner(
        address as string
      );
      setNfts(ownedNfts);
    })();
  }, [address]);

  return (
    <>
      <div className="flex flex-wrap p-4 mt-12 justify-center">
        {nfts.map((nft) => (
          <div className="mr-1 mb-1">
            <NFT nft={nft}></NFT>
          </div>
        ))}
      </div>
    </>
  );
};
