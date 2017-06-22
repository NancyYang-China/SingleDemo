class Info < ApplicationRecord
  default_scope { order('id ASC') }
  mount_uploader :asset, AssetUploader

  rails_admin do
    list do
      field :id
      field :title
      field :updated_at do
        label I18n.t('updated_at')
      end
      field :created_at do
        label I18n.t('created_at')
      end
    end
  end
end
