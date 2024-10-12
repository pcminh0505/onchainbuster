import { chainIDMap } from '@/constants/chains';
import {
  calculateMultichainTokenPortfolio,
  formatNumberUSD,
} from '@/helpers/portfolio.helper';
import Title from '../Title';
import { CircularPackingChart } from '../CircularPackingChart';
import { Separator, Table } from '@radix-ui/themes';
import TokenPortfolioTable from '../TokenPortfolioTable';

type TokenPortfolioProps = {
  tokenPortfolio: TTokenBalance[];
  marketData: TTokenSymbolDetail[];
};

const TokenPortfolio = ({
  tokenPortfolio,
  marketData,
}: TokenPortfolioProps) => {
  const {
    sumPortfolioUSDValue,
    sumMemeUSDValue,
    mostValuableToken,
    aggregatedBalanceBySymbol,
    chainRecordsWithTokens,
    chainCircularPackingData,
  } = calculateMultichainTokenPortfolio(tokenPortfolio, marketData);
  return (
    <section className="mt-2 flex justify-center items-center flex-col">
      <div className="flex justify-between items-center w-full">
        <CircularPackingChart
          data={chainCircularPackingData}
          height={300}
          width={400}
        />
        <TokenPortfolioTable
          aggregatedBalanceBySymbol={aggregatedBalanceBySymbol}
        />
      </div>
      <div className="flex flex-wrap mt-5">
        <div className="rounded-xl mx-1 border border-palette-line/20 shadow-xl w-fit px-4 py-2">
          <h1 className="font-bold text-md">🏆 Most valuable asset</h1>
          <Separator className="mb-3 mt-2" size={'4'} />
          <div>
            <img
              src={mostValuableToken.logoURI}
              alt={`${mostValuableToken.name} logo`}
              className="mr-1 inline-block h-6 w-6 rounded-full"
            />
            <span>
              {mostValuableToken.name} ({mostValuableToken.symbol}), worth&nbsp;
              <span className="font-bold">
                {formatNumberUSD(mostValuableToken.value)}
              </span>
            </span>
          </div>
        </div>
        <div className="rounded-xl mx-1 border border-palette-line/20 shadow-xl w-fit px-4 py-2">
          <h1 className="font-bold text-md">💪 Longest holding streak</h1>
          <Separator className="mb-3 mt-2" size={'4'} />
          <div>
            You've been holding <span className="font-bold">BNB</span> for over{' '}
            <br />
            <span className="font-bold">18 months</span>
          </div>
        </div>
        <div className="rounded-xl mx-1 border border-palette-line/20 shadow-xl w-fit px-4 py-2">
          <h1 className="font-bold text-md">💰 Assets allocation</h1>
          <Separator className="mb-3 mt-2" size={'4'} />
          <div>
            <span className="font-bold">51%</span> of your wallet balance is in
            tokens, <br />
            compared in <span className="font-bold">49%</span> in NFTs.
          </div>
        </div>
      </div>
      <p>Portfolio value: {formatNumberUSD(sumPortfolioUSDValue)}</p>
      <p>Meme value: {formatNumberUSD(sumMemeUSDValue)}</p>
      <p>Portfolio value by chain:</p>
      {Object.entries(chainRecordsWithTokens).map(([chain, value]) => (
        <div key={chain}>
          <span>
            <img
              key={chain}
              src={chainIDMap[chain].logoURI}
              alt={`${chainIDMap[chain].name} logo`}
              className="mr-1 inline-block h-6 w-6 rounded-full"
            />
            {chain.toUpperCase()}: {formatNumberUSD(value.totalUSDValue)}
          </span>
        </div>
      ))}
    </section>
  );
};

export default TokenPortfolio;
