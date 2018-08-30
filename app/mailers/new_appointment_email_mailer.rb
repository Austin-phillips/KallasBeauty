class NewAppointmentEmailMailer < ApplicationMailer
  def new_appointment_email(appointment)
    @appointment = appointment
    mail(to: @appointment.email, subject: "Thanks for scheduling an appointment" )

  end 
end
