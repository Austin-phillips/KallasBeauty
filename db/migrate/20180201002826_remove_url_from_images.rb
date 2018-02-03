class RemoveUrlFromImages < ActiveRecord::Migration[5.1]
  def change
    remove_column :images, :url
  end
end
