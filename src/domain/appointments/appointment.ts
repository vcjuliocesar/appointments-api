import { IAppointment } from '@domain/models/appointment.model';

export class Appointment implements IAppointment {

    constructor(public pet: string,
        public owner: string,
        public date: string,
        public hour: string,
        public symptoms: string) { }

}