class News < ApplicationRecord
  default_scope { order('created_at DESC') }
  enum category: [:news, :point, :dynamic, :recruit]
  validates :created_at, :presence => true

  rails_admin do
    edit do
      field :title
      field :created_at
      field :category
      field :description
      field :content, :ck_editor
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
    
    show do
      field :title
      field :description
      field :content
      field :category do
        pretty_value do
          I18n.t("news_category.#{bindings[:object].category}")
        end
      end
    end
  end
end
