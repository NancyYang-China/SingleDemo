class NewsShowPage extends React.Component {
  constructor(props) {
    super(props)

    console.log(props.news);
    this.state = {
      type: 0
    }
  }

  _renderContent() {
    const { news } = this.props;

    return (
      <div className="news-show-content">
        <p className="date">{news.created_at.slice(0, 10)}</p>
        <p className="title">{news.title}</p>
        <div className="content" dangerouslySetInnerHTML={{__html: news.content}}/>
      </div>
    );
  }

  render() {
    return (
      <div className="news-show">
        <ImageBanner src="../assets/news_badge.jpeg"/>
        {this._renderContent()}
      </div>
    )
  }
}