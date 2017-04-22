class ChangeUserRateColumns < ActiveRecord::Migration[5.0]
  def change
    remove_column :user_rates, :binary_value
    remove_column :user_rates, :agregate_value
    add_column :user_rates, :rate_type, :integer, default: 0
    add_column :user_rates, :rate_value, :integer
    add_column :user_rates, :rate_direction, :integer
  end
end
