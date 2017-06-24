class CreateRecruitments < ActiveRecord::Migration[5.0]
  def change
    create_table :recruitments do |t|
      t.string :title
      t.text :description
      t.text :requirement
      t.string :email
      t.integer :count

      t.timestamps
    end
  end
end
