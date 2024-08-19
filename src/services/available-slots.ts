import axios, { AxiosInstance } from 'axios';
import { DateTime } from 'luxon';

export interface HealthUnit {
  id: string;
  name: string;
  address: string;
  next_slot_time: Date;
}

type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

const dayOfWeekMap: Record<DayOfWeek, string> = {
  'Monday': 'Segunda-feira',
  'Tuesday': 'Terça-feira',
  'Wednesday': 'Quarta-feira',
  'Thursday': 'Quinta-feira',
  'Friday': 'Sexta-feira',
  'Saturday': 'Sábado',
  'Sunday': 'Domingo'
};

// Interface para cada horário
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

interface DataItem {
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
  }

	async getAvailableSlotsByHealthUnitId(id: string) {
		const { data } = await this.api.get<DataItem[]>(`/api/available-slots/${id}`);

		return this.transformData(data);
	}

  private transformData(data: DataItem[]): DayData[] {
  const timezone = 'America/Sao_Paulo';

  const groupedByDate = data.reduce((acc: Record<string, DayData>, item: DataItem) => {
    const startDate = DateTime.fromISO(item.startTime).setZone(timezone);
    const endDate = DateTime.fromISO(item.endTime).setZone(timezone);

    const dateStr = startDate.toFormat('dd/MM/yyyy');
    const dayOfWeekEnglish = startDate.toFormat('cccc') as DayOfWeek;
    const dayOfWeek = dayOfWeekMap[dayOfWeekEnglish] || dayOfWeekEnglish;

    if (!acc[dateStr]) {
      acc[dateStr] = {
        date: dateStr,
        dayOfWeek: dayOfWeek,
        hours: []
      };
    }

    acc[dateStr].hours.push({
      id: item.id,
      startTime: startDate.toFormat('HH:mm'),
      endTime: endDate.toFormat('HH:mm'),
      isScheduled: item.isScheduled
    });

    return acc;
  }, {});

  return Object.values(groupedByDate);
};
}
