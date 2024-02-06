import { CreateAppointmentDTO } from "@application/dtos/appointment-dto.dto";
import { Appointment } from "@domain/appointments/appointment";
import { IAppointmentRepository } from "@domain/repositories/appointment-repository.model";

export class AppointmentRepository implements IAppointmentRepository{
    
    constructor(){}
    
    save(dto: CreateAppointmentDTO): Appointment {
        throw new Error("Method not implemented.");
    }

}