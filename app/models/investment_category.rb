class InvestmentCategory < ApplicationRecord
  has_many :investment

  rails_admin do
    list do
      field :id
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
