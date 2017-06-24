class NewsPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      category: 'news',
      year: "2017"
    }

    this.years = ["all", "2017", "2016", "2015", "old"]
  }

  _renderMenuItem(item) {
    const color = this.state.category === item.category ? "#a80309" : "#000000"

    return (
      <a style={{color}} className="menu-item" onClick={()=> {
        this.setState({category: item.category, year: "2017"})
        }}>
        {item.name}
      </a>
    )
  }

  _renderMenu() {
    const yearsBar = this.years.map(year=> {
      if (year === "all") return null
      var content = year === "old" ? "以往" : year;
      var color = this.state.year === year ? "#a80309" : "#000000"
      return (
        <a style={{color}} className="year-item" onClick={()=> {
            this.setState({year});
          }}>
          {content}
        </a>
      )
    })

    return (
      <div className="news-menu">
        <div style={{display: "flex", flexDirection: 'row'}}>
          {this._renderMenuItem({category: "news", name: "公司新闻"})}
          <div className="vertical-divider" />
          {this._renderMenuItem({category: "point", name: "观点分享"})}
        </div>          
        <div>
          {yearsBar}
        </div>
      </div>
    )
  }

  _renderList() {
    const { news } = this.props;
    const { category, year } = this.state;

    const newsListView = news.filter(news=> {
      const filterYear = year === "all" ? true :
                         year === "old" ? news.created_at.slice(0, 4) < 2015 :
                         news.created_at.slice(0, 4) === year;
      return (news.category === this.state.category) && filterYear
    }).map(news=> {
      return (
        <a href={`/news/${news.id}`}>
          <div className="news-item">
            <div className="news-date">
              <p>{news.created_at.slice(0, 10)}</p>
              <a href={`/news/${news.id}`}>
              <i className="fa fa-caret-down" href="/investment"/>
              </a>
            </div>
            <div className="vertical-divider"/>
            <div className="news-description">
              <a href={`/news/${news.id}`}>
                <p className="title">{news.title}</p>
                <p>{news.description}</p>
              </a>
              <div className="horizontal-divider"/>
            </div>
          </div>
        </a>
      );
    })

    var count = newsListView.length < 2 ? (2 - newsListView.length) : 0
    for(var i = 0; i < count; i++){
      newsListView.push(
        <div key={`others-${i}`} className="empty-item" />
      ) 
    }

    return (
      <div className="news-list">
        {newsListView}
      </div>
    );
  }

  render() {
    return (
      <div className="news">
        <ImageBanner src="assets/images/news_badge.jpeg">
          <div className="image-banner">
            <p>News</p>
            <div className="vertical-divider" />
            <p>ViewPoints</p>
          </div>
        </ImageBanner>
        {this._renderMenu()}
        {this._renderList()}
      </div>
    )
  }
}


