class AddLengthToAppointments < ActiveRecord::Migration[5.1]
  def change
    add_column :appointments, :length, :string
  end
end
