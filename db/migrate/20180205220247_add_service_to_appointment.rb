class AddServiceToAppointment < ActiveRecord::Migration[5.1]
  def change
    add_column :appointments, :service, :string
  end
end
