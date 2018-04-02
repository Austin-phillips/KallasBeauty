class Api::DaysController < ApplicationController
  before_action :set_day, only: [:show, :update, :destroy]

  def index
    render json: Day.all
  end

  def show
    render json: @days
  end

  def create
    day = Day.new(day_params)
    if day.save
      render json: day, status: :created
    else
      render json: day.errors, status: :unprocessible_entity
    end
  end

  def update
    if @days.update(day_params)
    render json: @days
    else 
      render json: @days.errors, status: :unprocessible_entity
    end
  end

  def destroy
    @days.destroy
  end

  private 

  def set_day
    @days = Day.find(params[:id])
  end 

  def day_params
    params.require(:day).permit(:day, :date)
  end 
end
