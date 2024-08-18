import { http } from '../http';
import { IUser } from '../interfaces/user';
import { toast } from 'react-toastify'

const login = async (body: {email: string, password: string}) => {
		const { data } = await http.post<{
			accessToken: string;
			refreshToken: string;
			user: IUser
		}>(`/api/auth/login`, body);

		return data;
};

export const authService = {
	login,
};
