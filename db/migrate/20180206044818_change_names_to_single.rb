class ChangeNamesToSingle < ActiveRecord::Migration[5.1]
  def change
    remove_column :appointments, :first_name
    remove_column :appointments, :last_name
    add_column :appointments, :first, :string
    add_column :appointments, :last, :string
  end
end
