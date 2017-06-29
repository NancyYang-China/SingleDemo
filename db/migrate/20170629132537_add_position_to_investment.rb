class AddPositionToInvestment < ActiveRecord::Migration[5.0]
  def change
    add_column :investments, :position, :integer, unique: true
  end
end
