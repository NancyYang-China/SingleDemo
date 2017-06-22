class AddInvestmentCategoryToInvestment < ActiveRecord::Migration[5.0]
  def change
    add_reference :investments, :investment_category, foreign_key: true
  end
end
