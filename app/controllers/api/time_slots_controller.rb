class Api::TimeSlotsController < ApplicationController
  before_action :set_time_slot, only: [:show, :update, :destroy]
  before_action :set_day

  def index
    render json: @days.time_slots.available
  end

  def show
    render json: @time
  end

  def create
    time = @days.time_slots.new(time_params)
    if time.save
      render json: time, status: :created
    else
      render json: time.errors, status: :unprocessible_entity
    end
  end

  def update
    if @time.update(time_params)
      render json: @time
    else 
      render json: @time.errors, status: :unprocessible_entity
    end
  end

  def destroy
    @time.destroy
  end

  private 

  def set_time_slot
    @time = TimeSlot.find(params[:id])
  end 

  def set_day
    @days = Day.find(params[:day_id])
  end 

  def time_params
    params.require(:time_slot).permit(:time, :taken)
  end 
end
