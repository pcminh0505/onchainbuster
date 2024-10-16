type IValueByChain = {
  chainName: string;
  value: number;
};

type TTokenDetails = {
  totalBalance: number;
  chains: IValueByChain[];
  name: string;
  logoURI: string;
  price: number;
  totalUSDValue: number;
  tags: string[];
  date_added: string;
  symbol: string;
  decimals: number;
};

type TChainStats = {
  totalChains: string[];
  noActivityChains: string[];
  mostActiveChainName: string;
  mostActiveChainID: string;
  countUniqueDaysActiveChain: number;
  countActiveChainTxs: number;
};

type TActivityStats = {
  totalTxs: number;
  firstActiveDay: Date | null;
  uniqueActiveDays: number;
  longestStreakDays: number;
  currentStreakDays: number;
  activityPeriod: number;
};

type TChainRecordWithTokens = Record<
  string,
  {
    totalUSDValue: number;
    tokens: TTokenDetails[];
  }
>;

type TChainRecordWithNfts = Record<
  string,
  {
    totalUSDValue: number;
    tokens: TNFTBalance[];
  }
>;

type TSymbolAggregationBalance = Record<string, TTokenDetails>;

type TTokenPortfolioStats = {
  sumPortfolioUSDValue: number;
  sumMemeUSDValue: number;
  mostValuableToken: {
    name: string;
    symbol: string;
    value: number;
    logoURI: string;
  };
  aggregatedBalanceBySymbol: TSymbolAggregationBalance;
  chainRecordsWithTokens: TChainRecordWithTokens;
  chainCircularPackingData: TCircularTree;
};

type TNFTPortfolioStats = {
  sumPortfolioUSDValue: number;
  mostValuableNFTCollection: TNFTBalance | undefined;
  chainRecordsWithTokens: TChainRecordWithNfts;
};

type TCircularTreeNode = {
  type: 'node';
  value: number;
  name: string;
  children: Tree[];
};

type TCircularTreeLeaf = {
  type: 'leaf';
  name: string;
  value: number;
};

type TCircularTree = TCircularTreeNode | TCircularTreeLeaf;

type TDappInteraction = {
  name: string;
  count: number;
  window: [number, number];
};
type TLongestHoldingToken = {
  chain: string;
  chainLogoURI: string;
  symbol: string;
  duration: number;
};
type TDAppInteractionRecord = Record<string, TDappInteraction>;

type TDAppInteractionMap = {
  marketplace: TDAppInteractionRecord;
  defi: TDAppInteractionRecord;
  bridge: TDAppInteractionRecord;
  nameService: TDAppInteractionRecord;
};

type TDeFiActivityStats = {
  sumCount: number;
  dexCount: number;
  swapCount: number;
  lendCount: number;
};

type TTokenActivityStats = {
  sumCount: number;
  newCount: number;
};

type TNFTActivityStats = {
  sumCount: number;
  mintCount: number;
  buyCount: number;
  saleCount: number;
  tradeCount: number;
};

type TUserTraitResult = {
  trait: string;
  score: number;
};

type TNumberInPercentage = number;

type TNumberInMillisecond = number;

type TPieChartData = {
  id: string;
  label: string;
  value: {
    nft: number;
    token: number;
  };
  color: string;
};
