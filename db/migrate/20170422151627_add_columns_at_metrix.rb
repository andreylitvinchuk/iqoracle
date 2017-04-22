class AddColumnsAtMetrix < ActiveRecord::Migration[5.0]
  def change
    add_column :metrixes, :time_interval, :integer, default: 7200
  end
end
