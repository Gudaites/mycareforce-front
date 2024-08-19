import axios, { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';

export interface HealthUnit {
  id: string;
  name: string;
  address: string;
  next_slot_time: Date;
}

export interface IFindAllHealth {
  healthUnits: HealthUnit[];
  total: number
}

export class HealthUnitsService {
	private api: AxiosInstance;
	
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3000',
			headers: {
				Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('@mycareforce:token')}`
			},
    })

    this.api.defaults.timeout = 30000

    this.api.interceptors.response.use(
			(response) => response,
			async (error) => {
				if (error?.response?.data?.statusCode === 401) {
          localStorage.removeItem("@mycareforce:token");
          localStorage.removeItem("@mycareforce:refresh-token");
          localStorage.removeItem("@mycareforce:user");
				} else {
          toast.error('Erro Interno')
				}
			},
		);
  }

	async findAll(skip?: number) {
		const { data } = await this.api.get<IFindAllHealth>('/api/health-units', {
      params: {
        take: 10,
        skip
      }
    });

		return data;
	}
}
