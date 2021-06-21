class HomeController < ApplicationController
  # before_action :authenticate_user!, :only => [:index]

  def statement
    redirect_to '/statement.html'
  end

  def index
    render component: 'HomePage', props: { banners: Banner.all }
  end

  def about_us
    render component: 'AboutUsPage', props: { infos: Info.all, partners: Partner.all, hornors: Hornor.all }
  end

  def investment
    render component: 'InvestmentPage', props: { investments: Investment.all, investment_categories: InvestmentCategory.all, cate: params[:c] || InvestmentCategory.first.id }
  end

  def shengzihui
    render component: 'ShengZiHuiPage',
           props: {
             news: Shengzihui.all.order(created_at: 'desc').map do |item|
                     {
                       id: item.id,
                       title: item.title,
                       content: item.content,
                       created_at: item.created_at,
                       assets: [item.image1, item.image2, item.image3, item.image4, item.image5, item.image6].map(&:url).compact
                     }
                   end,
             banner: Banner.find("4")
           }
  end

  def contact_us
    render component: 'ContactUsPage'
  end
end
