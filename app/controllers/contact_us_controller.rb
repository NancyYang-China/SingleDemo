class ContactUsController < ApplicationController
  def index
    render component: 'ContactUsPage'
  end
end
