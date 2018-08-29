class NewAppointmentEmailMailer < ApplicationMailer
  def new_appointment_email(appointment)
    @appointment = appointment
    mail(to: )

  end 
end
