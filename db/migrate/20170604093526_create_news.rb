class CreateNews < ActiveRecord::Migration[5.0]
  def change
    create_table :news do |t|
      t.string :title
      t.string :description
      t.text :content
      t.integer :type

      t.timestamps
    end
  end
end
