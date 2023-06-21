import { OwnedNft } from "alchemy-sdk";

export const NFT = ({ nft }: { nft: OwnedNft }) => (
  <div className="w-[200px] h-[250px] overflow-hidden border rounded-md p-2 shadow-md shadow-slate-200">
    <div className="h-[100px] mb-2">
      {nft.media[0] && (
        <img
          src={nft.media[0].gateway}
          alt={nft.rawMetadata?.name}
          className="block mx-auto rounded-md max-h-[100px] max-w-[100px]"
        />
      )}
    </div>
    <p className="font-bold text-sm">{nft.title}</p>
    <p className="text-xs">{nft.contract.symbol}</p>
    <p>
      <a
        className="text-xs text-blue-400"
        href={`https://etherscan.io/address/${nft.contract.address}`}
      >
        contract
      </a>
    </p>
    <p className="text-xs" title={nft.description}>
      {nft.description.slice(0, 80)}...
    </p>
  </div>
);
