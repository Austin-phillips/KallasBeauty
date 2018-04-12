class Api::SchedulesController < ApplicationController
  before_action :variables

  def create
    start_date = Date.parse(params[:start])
    end_date = Date.parse(params[:end])
    @schedule = (start_date..end_date).to_a
    @schedule.each do |d|
      @day_id += 1
      1.times do
      Day.create(
        date: d ,
        day: d.strftime("%A")
      )
      @time_slots.each do |t|
        TimeSlot.create(
          day_id: @day_id,
          time: t,
          taken: false
        )
      end 
      end
    end
  end

  private 

  def schedule_params
    params.require(:schedule).permit(:start, :end)
  end

  def variables
    if(Day.last == nil)
      @day_id = 0
    else
      @day_id = Day.last.id
    end
    @time_slots = [
      '10:00 AM',
      '10:30 AM',
      '11:00 AM',
      '11:30 AM',
      '12:00 PM',
      '12:30 PM',
      '1:00 PM',
      '1:30 PM',
      '2:00 PM',
      '2:30 PM',
      '3:00 PM',
      '3:30 PM',
      '4:00 PM',
      '4:30 PM',
      '5:00 PM'
    ]
  end 

end
