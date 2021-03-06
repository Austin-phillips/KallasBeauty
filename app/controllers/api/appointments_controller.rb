class Api::AppointmentsController < ApplicationController
  before_action :set_appointment, except: [:index, :create, :all_app, :show, :reset]

  def index
    render json: current_user.appointments.all
  end

  def all_app
    render json: Appointment.all.order(date: :asc, time: :asc)
  end 

  def show
    render json: Appointment.find(params[:id])
  end

  def create
    @appointment = current_user.appointments.create(appointment_params)
    if @appointment.save
      NewAppointmentEmailMailer.new_appointment_email(@appointment).deliver
      render json: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  def update
    if @appointment.update(appointment_params)
      render json: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @appointment.destroy
  end

  def reset
    email = params["password"]
    user = User.where(email: email)
    user.send_reset_password_instructions
    # @user_id = params["id"].to_i
    # @password = params["password"]
    # @password_confirmation = params["passwordConfirmation"]

    # User.find(@user_id).reset_password(@password, @password_confirmation)
  end 

  private
    def appointment_params
      params.require(:appointment).permit(:date, :time, :first, :last, :notes, :service, :email, :length)
    end

    def set_appointment
      @appointment = current_user.appointments.find(params[:id])
    end
end
