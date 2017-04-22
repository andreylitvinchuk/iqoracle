class CreateUserRates < ActiveRecord::Migration[5.0]
  def change
    create_table :user_rates do |t|
      t.references :user, foreign_key: true
      t.references :event, foreign_key: true
      t.integer :rate_points
      t.integer :binary_value
      t.json :agregate_value
      t.boolean :completed
      t.boolean :success

      t.timestamps
    end
  end
end
