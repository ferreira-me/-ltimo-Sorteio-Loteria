import { useContext } from "react";
import { LotteryContext } from "../contexts/LotteryContext";
import LotteryDisplay from "../components/LotteryDisplay";

const Timemania = () => {
  const context = useContext(LotteryContext);

  if (!context) {
    return <div>Erro ao carregar o contexto.</div>;
  }

  const { lotteries, loading } = context;

  return (
    <LotteryDisplay
      title="Timemania"
      data={lotteries?.timemania}
      loading={loading}
      color="#FFD700" // Amarelo vibrante para as bolinhas
    />
  );
};

export default Timemania;
