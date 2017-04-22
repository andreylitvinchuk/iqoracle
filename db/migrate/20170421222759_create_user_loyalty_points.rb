class CreateUserLoyaltyPoints < ActiveRecord::Migration[5.0]
  def change
    create_table :user_loyalty_points do |t|
      t.references :user
      t.integer :loyalty_points_count

      t.timestamps
    end
  end
end
