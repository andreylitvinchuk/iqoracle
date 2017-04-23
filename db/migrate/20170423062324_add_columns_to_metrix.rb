class AddColumnsToMetrix < ActiveRecord::Migration[5.0]
  def change
    add_column :metrixes, :pair_id, :integer
  end
end
