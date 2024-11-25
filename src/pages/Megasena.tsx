import { useContext } from "react";
import { LotteryContext } from "../contexts/LotteryContext";
import LotteryDisplay from "../components/LotteryDisplay";

const Megasena = () => {
  const context = useContext(LotteryContext);

  if (!context) {
    return <div>Erro ao carregar o contexto.</div>;
  }

  const { lotteries, loading } = context;

  return (
    <LotteryDisplay
      title="Mega-Sena"
      data={lotteries?.megasena}
      loading={loading}
      color="#209869" // Verde escuro para as bolinhas
    />
  );
};

export default Megasena;
