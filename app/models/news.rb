class News < ApplicationRecord
  default_scope { order('created_at DESC') }
  enum category: [:news, :point]
  mount_uploader :image1, AssetUploader
  mount_uploader :image2, AssetUploader
  mount_uploader :image3, AssetUploader
  mount_uploader :image4, AssetUploader
  mount_uploader :image5, AssetUploader
  mount_uploader :image6, AssetUploader

  rails_admin do
    edit do
      field :title
      field :created_at
      field :category
      field :description
      field :content, :ck_editor
      # field :image1
      # field :image2
      # field :image3
      # field :image4
      # field :image5
      # field :image6
   end
 
    list do
      field :id
      field :title
      field :category do
        pretty_value do
          I18n.t("news_category.#{bindings[:object].category}")
        end
      end
      field :updated_at do
        label I18n.t('updated_at')
      end
      field :created_at do
        label I18n.t('created_at')
      end
    end
  end
end
