import axios, { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { DataItem } from './available-slots';
import { transformData } from '../utils/transformDatas';

export interface IPostRegistrationResponse {
  id: string;
  availableSlotId: string;
  userId: string;
  createdAt: Date;
}

export class RegistrationService {
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

	async registerInterest(availableSlotId: string) {
		const { data } = await this.api.post<IPostRegistrationResponse>('/api/registrations/register-interest', {
      availableSlotId
    });

		return data;
	}

  async getAllRegistrarions() {
		const { data } = await this.api.get<DataItem[]>('/api/registrations');

		return transformData(data);

  }
}
