class StatementController < ApplicationController
  def index
    render component: 'Statement'
  end
end
