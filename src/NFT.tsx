import { OwnedNft } from "alchemy-sdk";

export const NFT = ({ nft }: { nft: OwnedNft }) => {
  const imageSrc = nft.media[0]?.gateway ?? nft.contract.openSea?.imageUrl;
  const title = nft.title || nft.contract.name;
  const description = nft.description || nft.contract.openSea?.description;
  return (
    <div className="w-[200px] h-[250px] overflow-hidden border rounded-md p-2 shadow-md shadow-slate-200">
      <div className="h-[100px] mb-2">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={nft.rawMetadata?.name}
            className="block mx-auto rounded-md max-h-[100px] max-w-[100px]"
          />
        ) : (
          nft.contract.openSea && (
            <img
              src={nft.contract.openSea?.imageUrl}
              alt={nft.rawMetadata?.name}
              className="block mx-auto rounded-md max-h-[100px] max-w-[100px]"
            />
          )
        )}
      </div>
      <p className="font-bold text-sm">{title}</p>
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
        {description?.slice(0, 80)}...
      </p>
    </div>
  );
};
