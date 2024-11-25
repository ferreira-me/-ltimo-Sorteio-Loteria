// Representa os dados de uma loteria específica
export interface LotteryData {
  dezenas: string[];
  dataPorExtenso: string;
}

// Dados completos de todas as loterias
export interface LotteryProps {
  megasena: LotteryData;
  quina: LotteryData;
  timemania: LotteryData;
}

// Tipo do contexto
export interface LotteryContextProps {
  lotteries: LotteryProps | null;
  loading: boolean;
}
