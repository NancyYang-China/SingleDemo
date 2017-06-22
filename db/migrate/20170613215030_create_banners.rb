class CreateBanners < ActiveRecord::Migration[5.0]
  def change
    create_table :banners do |t|
      t.string :title
      t.text :sub_title
      t.string :icon
      t.string :image

      t.timestamps
    end
  end
end
