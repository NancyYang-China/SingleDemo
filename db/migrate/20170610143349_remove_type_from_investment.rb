class RemoveTypeFromInvestment < ActiveRecord::Migration[5.0]
  def change
    remove_column :investments, :type, :integer
  end
end
