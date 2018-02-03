class CreateAppointments < ActiveRecord::Migration[5.1]
  def change
    create_table :appointments do |t|
      t.string :date
      t.string :time
      t.string :first_name
      t.string :last_name
      t.text :notes
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
