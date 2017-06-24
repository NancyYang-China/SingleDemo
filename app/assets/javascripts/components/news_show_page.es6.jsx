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
        <div onClick={()=> {history.back()}}  className="back-content">
          <p>返回
          <i className="fa fa-angle-left" /></p>
        </div>
        <p className="title">{news.title}</p>
        <p className="date">{news.created_at.slice(0, 10)}</p>
        <div className="content" dangerouslySetInnerHTML={{__html: news.content}}/>
      </div>
    );
  }

  render() {
    return (
      <div className="news-show">
        <img className="full-width" src="../assets/images/news_badge.jpeg"/>
        <div className="space-bar flex1 flex-h"></div>
        {this._renderContent()}
      </div>
    )
  }
}