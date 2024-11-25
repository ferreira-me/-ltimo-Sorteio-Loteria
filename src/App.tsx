import { LotteryProvider } from "./contexts/LotteryContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Megasena from "./pages/Megasena";
import Quina from "./pages/Quina";
import Timemania from "./pages/Timemania";

function App() {
  return (
    <LotteryProvider>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/mega" element={<Megasena />} />
          <Route path="/quina" element={<Quina />} />
          <Route path="/time" element={<Timemania />} />
        </Routes>
      </BrowserRouter>
    </LotteryProvider>
  );
}

export default App;
