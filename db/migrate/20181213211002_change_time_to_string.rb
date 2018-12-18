class ChangeTimeToString < ActiveRecord::Migration[5.1]
  def change
    change_column :services, :time, :string
  end
end
