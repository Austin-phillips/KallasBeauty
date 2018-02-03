class Api::AppointmentsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_appointment, except: [:index, :create]

  def index
    @appointment = current_user.projects
  end

  def show
  end

  def create
    if @appointment.save(appointment_params)
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

  private
    def appointment_params
      params.require(:appointment).permit(:date, :time, :first_name, :last_name, :notes)
    end

    def set_appointment
      @appointment = current_user.appointments.find(params[:id])
    end
end
