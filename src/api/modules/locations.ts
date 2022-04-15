import axios from "../../libs/axios";
import { ApiPagination, Location, LocationsFilters } from "../../types";

const BASE_PATH = "/location";

const ErrorMessages = {
  LIST_LOCATIONS: "Erro ao buscar localizações",
  GET_LOCATIONS: "Erro ao buscar localização"
};

const locationsModule = {
  /**
   * Get all locations
   */
  async list(filters: LocationsFilters = {}) {
    try {
      const response = await axios.get<ApiPagination<Location[]>>(BASE_PATH, {
        params: filters
      });

      return response.data;
    } catch (error) {
      throw new Error(ErrorMessages.LIST_LOCATIONS);
    }
  },
  /**
   * Get a single location
   */
  async get(id: number) {
    try {
      const response = await axios.get<Location>(`${BASE_PATH}/${id}`);

      return response.data;
    } catch (error) {
      throw new Error(ErrorMessages.GET_LOCATIONS);
    }
  },
  /**
   * Get multiple locations
   */
  async getMultiple(ids: number[]) {
    try {
      const response = await axios.get<Location[]>(
        `${BASE_PATH}/${ids.join(",")}`
      );

      return response.data;
    } catch (error) {
      throw new Error(ErrorMessages.LIST_LOCATIONS);
    }
  }
};

export default locationsModule;
