import { ClientServiceRepository } from "@/repositories/ClientServiceRepository";
import type { ClientService } from "@/types";

export class ClientServiceService {
  static async getServices(): Promise<ClientService[]> {
    return await ClientServiceRepository.getAll();
  }
}
