class CreateInvestments < ActiveRecord::Migration[5.0]
  def change
    create_table :investments do |t|
      t.string :title
      t.string :logo
      t.text :description
      t.integer :type

      t.timestamps
    end
  end
end
