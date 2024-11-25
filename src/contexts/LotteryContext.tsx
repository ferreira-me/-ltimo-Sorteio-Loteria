import { createContext, ReactNode, useEffect, useState } from "react";
import { LotteryContextProps, LotteryProps } from "../types";
import lottery from "../services/Lottery";

// Criar o contexto com o tipo correto
export const LotteryContext = createContext<LotteryContextProps | null>(null);

export function LotteryProvider({ children }: { children: ReactNode }) {
  const [lotteries, setLotteries] = useState<LotteryProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await lottery.get();
        setLotteries(data);
      } catch (error) {
        console.error("Erro ao buscar dados da loteria:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <LotteryContext.Provider value={{ lotteries, loading }}>
      {children}
    </LotteryContext.Provider>
  );
}
