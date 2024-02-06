import { CreateAppointmentDTO } from "@application/dtos/appointment-dto.dto";
import { Appointment } from "@domain/appointments/appointment";

export interface IAppointmentRepository{
    save(dto:CreateAppointmentDTO):Appointment
}