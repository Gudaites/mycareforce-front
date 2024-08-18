import axios, { AxiosInstance } from 'axios';

export interface IFindAllHealth {
  id: string;
  name: string;
  address: string;
  next_slot_time: Date;
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
  }

	async findAll() {
		const { data } = await this.api.get<IFindAllHealth[]>('/api/health-units');

		return data;
	}
}
