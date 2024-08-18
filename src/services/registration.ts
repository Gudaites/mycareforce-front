import axios, { AxiosInstance } from 'axios';

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
  }

	async registerInterest(availableSlotId: string) {
		const { data } = await this.api.post<IPostRegistrationResponse>('/api/registrations/register-interest', {
      availableSlotId
    });

		return data;
	}
}
