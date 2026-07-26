import type { ClientService } from "@/types";
import servicesData from "@/data/services.json";

export class ClientServiceRepository {
  static async getAll(): Promise<ClientService[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(servicesData as ClientService[]);
      }, 150);
    });
  }
}
