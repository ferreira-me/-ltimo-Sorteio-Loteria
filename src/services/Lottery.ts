import { LotteryProps } from "../types";
import api from "./api";

class Lottery {
  async get(): Promise<LotteryProps> {
    // Adiciona delay para simular tempo de resposta
    await delay(2000);
    const { data } = await api.get("/"); // Certifique-se de que o endpoint retorna o formato correto
    return data;
  }
}

// Função para criar delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const lottery = new Lottery();
export default lottery;
