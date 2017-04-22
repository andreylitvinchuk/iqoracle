class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :name
      t.references :metrix, foreign_key: true
      t.integer :type

      t.timestamps
    end
  end
end
