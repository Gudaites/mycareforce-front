import { DateTime } from "luxon";
import { DataItem, DayData } from "../services/available-slots";

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

export const transformData = (data: DataItem[]): DayData[] => {
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
