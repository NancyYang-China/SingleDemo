class InvestmentCategory < ApplicationRecord
  has_many :investment
  default_scope { order('position ASC') }

  rails_admin do
    nestable_list true

    edit do
      field :name
      field :investment
    end

    list do
      field :position
      field :name
      field :updated_at do
        label I18n.t('updated_at')
      end
      field :created_at do
        label I18n.t('created_at')
      end
    end
  end
end
