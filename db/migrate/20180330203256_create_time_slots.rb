class CreateTimeSlots < ActiveRecord::Migration[5.1]
  def change
    create_table :time_slots do |t|
      t.integer :time
      t.boolean :taken, default: false
      t.belongs_to :day, foreign_key: true

      t.timestamps
    end
  end
end
