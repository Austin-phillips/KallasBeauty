class TimeSlot < ApplicationRecord
  belongs_to :day

  def self.available
    select('*')
    .where('time_slots.taken <> TRUE')
    .order('time')
  end 
end
