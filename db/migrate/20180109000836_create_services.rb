class CreateServices < ActiveRecord::Migration[5.1]
  def change
    create_table :services do |t|
      t.string :name
      t.float :price
      t.text :description
      t.integer :time

      t.timestamps
    end
  end
end
