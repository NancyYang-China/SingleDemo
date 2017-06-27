class Investment < ApplicationRecord
  default_scope { order('id ASC') }
  mount_uploader :logo, LogoUploader

  belongs_to :investment_category

  rails_admin do
    edit do
      field :title
      field :logo
      field :description, :text do
        html_attributes maxlength: 70, rows: 2, cols: 40
     end
      field :investment_category
      field :website
    end

    list do
      field :id
      field :title
      field :website
      field :investment_category do
        pretty_value do # used in list view columns and show views, defaults to formatted_value for non-association fields
          bindings[:object].investment_category.name
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
