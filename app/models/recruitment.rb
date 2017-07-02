class Recruitment < ApplicationRecord
  default_scope { order('position ASC') }
 
  
  rails_admin do
    nestable_list true

    edit do
      field :title
      field :description
      field :requirement
      field :email
      field :count 
    end

    list do
      field :position
      field :title
      field :count
      field :description
      field :updated_at do
        label I18n.t('updated_at')
      end
    end
  end
end
