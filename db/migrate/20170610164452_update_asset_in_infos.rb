class UpdateAssetInInfos < ActiveRecord::Migration[5.0]
  def change
    remove_column :infos, :banner_image, :string
    add_column :infos, :asset, :string
  end
end
