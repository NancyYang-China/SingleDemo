class AddMobileIconToBanners < ActiveRecord::Migration[5.0]
  def change
    add_column :banners, :mobile_banner, :string
  end
end
