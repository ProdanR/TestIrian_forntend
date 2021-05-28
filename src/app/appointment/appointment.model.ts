export interface IAppointment {
  _id: string;
  animalName: string;
  dateHour: string;
  doctorName: string;
  services: any[];
  diagnostic: string;
  status: string;
  totalCost: number;
}
