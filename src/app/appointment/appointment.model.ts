export interface IAppointment {
  id: string;
  animalName: string;
  appointmentDateTime: string;
  doctorId: number;
  services: any[];
  diagnostic: string;
  status: string;
  totalCost: number;
}
