class AddWebsiteToInvestments < ActiveRecord::Migration[5.0]
  def change
    add_column :investments, :website, :string
  end
end
