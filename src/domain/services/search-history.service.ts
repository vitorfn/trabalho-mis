import { CityRepository } from "./protocols/city-repository";
import { Storage } from "@ionic/storage-angular";
import { City } from "../entities/city";

export class SearchHistoryService {
  constructor(
    private readonly cityRepo: CityRepository,
    private storage: Storage
  ) {}

  // Função para criar o histórico de cidades
  async createHistory(): Promise<City[]> {
    // Criação do banco de dados
    await this.storage.create();
    if (!(await this.storage.get("history"))) {
      // Caso não exista um repositório, cria um novo
      await this.storage.set("history", []);
    }
    // Retorna o histórico
    return await this.storage.get("history");
  }

  // Salva o id da cidade consultada no histórico
  async saveCity(id: number): Promise<City[]> {
    // Busca o nome da cidade pelo ID
    const city = await this.cityRepo.getById(id);
    // Busca no histórico de consultas
    const history = await this.storage.get("history");

    // Função que verifica se a cidade já foi registrada no histórico
    const index = history.findIndex((c) => c.id === city.id);
    if (index > -1) {
      history.splice(index, 1);
    }

    history.unshift(city);
    return await this.storage.set("history", history);
  }
}
