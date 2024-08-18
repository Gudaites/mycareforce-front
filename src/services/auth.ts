import axios, { AxiosInstance } from 'axios';
import { IUser } from '../interfaces/user';
export class AuthService {
	private api: AxiosInstance;
	
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3000',
			headers: {
				Accept: 'application/json',
			},
    })

    this.api.defaults.timeout = 30000
  }

	async login(body: {email: string, password: string}) {
		const { data } = await this.api.post<{
			accessToken: string;
			refreshToken: string;
			user: IUser
		}>(`/api/auth/login`, body);

		return data;
	}
}
