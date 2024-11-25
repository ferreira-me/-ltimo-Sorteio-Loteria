import "./LotteryDisplay.css";

interface LotteryDisplayProps {
  title: string;
  data?: { dezenas: string[]; dataPorExtenso: string };
  loading: boolean;
  color: string; // Cor específica para as bolinhas
}

const LotteryDisplay = ({ title, data, loading, color }: LotteryDisplayProps) => {
  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  if (!data) {
    return <div>No data available.</div>;
  }

  return (
    <div className="container">
      <div className="results-title">{title}</div>
      <div className="numbers">
        {data.dezenas.map((number, index) => (
          <div
            className="number"
            key={index}
            style={{ backgroundColor: color }} // Cor da bolinha
          >
            {number}
          </div>
        ))}
      </div>
      <div className="date">{data.dataPorExtenso}</div>
    </div>
  );
};

export default LotteryDisplay;
