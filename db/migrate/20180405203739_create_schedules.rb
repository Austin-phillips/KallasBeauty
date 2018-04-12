class CreateSchedules < ActiveRecord::Migration[5.1]
  def change
    create_table :schedules do |t|
      t.string :start
      t.string :end

      t.timestamps
    end
  end
end
