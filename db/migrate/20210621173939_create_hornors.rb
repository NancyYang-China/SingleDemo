class CreateHornors < ActiveRecord::Migration[5.0]
  def change
    create_table :hornors do |t|
      t.string :title
      t.string :image
      t.string :link
      t.text :description
      t.integer :position, unique: true

      t.timestamps
    end
  end
end
