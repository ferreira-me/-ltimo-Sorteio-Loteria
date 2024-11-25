import { useContext } from "react";
import { LotteryContext } from "../contexts/LotteryContext";
import LotteryDisplay from "../components/LotteryDisplay";

const Quina = () => {
  const context = useContext(LotteryContext);

  if (!context) {
    return <div>Erro ao carregar o contexto.</div>;
  }

  const { lotteries, loading } = context;

  return (
    <LotteryDisplay
      title="Quina"
      data={lotteries?.quina}
      loading={loading}
      color="#260085" // Roxo para as bolinhas
    />
  );
};

export default Quina;
