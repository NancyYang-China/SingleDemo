class AddImagesToNews < ActiveRecord::Migration[5.0]
  def change
    add_column :news, :image1, :string
    add_column :news, :image2, :string
    add_column :news, :image3, :string
    add_column :news, :image4, :string
    add_column :news, :image5, :string
    add_column :news, :image6, :string
     
    add_column :shengzihuis, :image1, :string
    add_column :shengzihuis, :image2, :string
    add_column :shengzihuis, :image3, :string
    add_column :shengzihuis, :image4, :string
    add_column :shengzihuis, :image5, :string
    add_column :shengzihuis, :image6, :string
  end
end
