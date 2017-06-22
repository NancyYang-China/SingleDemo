class AddIndexToInvestmentCategory < ActiveRecord::Migration[5.0]
  def change
    add_index :investment_categories, :name, unique: true
  end
end
