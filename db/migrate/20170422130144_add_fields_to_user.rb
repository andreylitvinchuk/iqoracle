class AddFieldsToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :rate_points, :integer
  end
end
