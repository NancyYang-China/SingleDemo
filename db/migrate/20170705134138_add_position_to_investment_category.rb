class AddPositionToInvestmentCategory < ActiveRecord::Migration[5.0]
  def change
    add_column :investment_categories, :position, :integer, unique: true
  end
end
