class AddEmailToAppointment < ActiveRecord::Migration[5.1]
  def change
    add_column :appointments, :email, :string
  end
end
