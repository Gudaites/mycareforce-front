import axios, { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { transformData } from '../utils/transformDatas';

export interface HealthUnit {
  id: string;
  name: string;
  address: string;
  next_slot_time: Date;
}
interface Hour {
  id: string;
  startTime: string;
  endTime: string;
  isScheduled: boolean;
}

export interface DayData {
  date: string;
  dayOfWeek: string;
  hours: Hour[];
}

export interface DataItem {
  id: string;
  startTime: string;
  endTime: string;
  capacity: number;
  booked: number;
  isScheduled: boolean;
}


export class AvailableSlotsService {
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

	async getAvailableSlotsByHealthUnitId(id: string) {
		const { data } = await this.api.get<DataItem[]>(`/api/available-slots/${id}`);

		return transformData(data);
	}
}
