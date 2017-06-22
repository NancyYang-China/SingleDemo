class NewsController < ApplicationController
  def index
    render component: 'NewsPage', props: { news: News.all }
  end
  
  def show
    render component: 'NewsShowPage', props: { news: News.find(params[:id]) }
  end
end
