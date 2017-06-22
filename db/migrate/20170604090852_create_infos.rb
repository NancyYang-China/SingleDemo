class CreateInfos < ActiveRecord::Migration[5.0]
  def change
    create_table :infos do |t|
      t.string :title
      t.string :banner_image
      t.text :description

      t.timestamps
    end
  end
end
