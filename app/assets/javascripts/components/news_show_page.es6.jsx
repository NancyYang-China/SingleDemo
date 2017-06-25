class NewsShowPage extends BasePage {
  constructor(props) {
    super(props)

    this.state = {
      type: 0
    }
  }

  _path() {
    return "/news"
  }

  _renderContent() {
    const { news } = this.props;

    return (
      <div className="news-show-content">
        <a href="javascript:history.back();">
          <div className="back-content">
          <p>返回
          <i className="fa fa-angle-left" /></p>
          </div>
        </a>
        <p className="title">{news.title}</p>
        <p className="date">{news.created_at.slice(0, 10)}</p>
        <div className="news-content flex1" dangerouslySetInnerHTML={{__html: news.content}}/>
      </div>
    );
  }

  _render() {
    return (
      <div className="news-show flex-v">
        <div className="full-width">
          <div className="inner">
            <img className="image" src="../assets/images/news_badge.jpeg"/>
          </div>
        </div>
        {this._renderContent()}
      </div>
    )
  }
}