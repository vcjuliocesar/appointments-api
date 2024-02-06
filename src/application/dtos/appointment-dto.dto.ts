import {IAppointment} from '@domain/models/appointment.model'

export interface CreateAppointmentDTO extends Omit<IAppointment,'id'>{}