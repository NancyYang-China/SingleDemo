class Recruitment < ApplicationRecord
  
  
  rails_admin do
    list do
      field :id
      field :title
      field :count
      field :description
      field :updated_at do
        label I18n.t('updated_at')
      end
    end
  end
end
