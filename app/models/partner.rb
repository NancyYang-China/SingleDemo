class Partner < ApplicationRecord
  default_scope { order('position ASC') }
  mount_uploader :logo, LogoUploader

  rails_admin do
    nestable_list true

    edit do
      field :name
      field :logo
      field :website
      field :description
    end
  
    list do
      field :id
      field :name
      field :position
      field :website do
        pretty_value do
          if value.include?"http"
            %(<a href="#{value}">#{value}</a>).html_safe
          else
            value
          end
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
