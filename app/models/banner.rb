class Banner < ApplicationRecord
  default_scope { order('id ASC') }

  mount_uploader :image, BannerUploader
  mount_uploader :icon, ImageUploader
  mount_uploader :mobile_banner, BannerUploader

  rails_admin do
    list do
      field :id
      field :title
      field :sub_title
      field :image
      field :updated_at do
        label I18n.t('updated_at')
      end
      field :created_at do
        label I18n.t('created_at')
      end
    end
  end
end
