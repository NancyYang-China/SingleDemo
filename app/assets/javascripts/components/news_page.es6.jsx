class NewsPage extends BasePage {

  constructor(props) {
    super(props)

    const groups = props.news.reduce((acc, item) => {
      const key = item.created_at.slice(0, 4)
      acc[key] = acc[key] || []
      acc[key].push(item)

      return acc
    }, {})
    this.years = Object.keys(groups).sort().reverse().slice(0, 3).concat("old")
    this.state = {
      category: 'news',
      year: this.years[0]
    }
  }

  componentDidMount() {
    var newState = {
      category: 'news',
      year: this.years[0]
    }
    if (window.category != undefined) {
      newState.category = window.category
    }
    if (window.year != undefined) {
      newState.year = window.year
    }
    this.setState(newState)
    super.componentDidMount()
  }

  componentWillUnmount() {
    const { category, year } = this.state

    window.category = category
    window.year = year
    super.componentWillUnmount()
  }

  _path() {
    return "/news"
  }

  _renderMenuItem(item) {
    const color = this.state.category === item.category ? "#a80309" : "#000000"

    return (
      <a style={{color}} className="menu-item" onClick={()=> {
        this.setState({category: item.category})
        }}>
        {item.name}
      </a>
    )
  }

  _renderMenu() {
    const yearsBar = this.years.map((year, index)=> {
      var content = year === "old" ? "以往" : year;
      var color = this.state.year === year ? "#a80309" : "#000000"
      return (
        <a key={index} style={{color}} className="year-item" onClick={()=> {
            this.setState({year});
          }}>
          {content}
        </a>
      )
    })

    return (
      <div className="news-menu flex-h flex-vc">
        <div className="flex-h">
          {this._renderMenuItem({category: "news", name: "公司新闻"})}
          <div className="vertical-divider" />
          {this._renderMenuItem({category: "point", name: "观点分享"})}
          <div className="vertical-divider" />
          {this._renderMenuItem({category: "dynamic", name: "组合动态"})}
        </div>
        <div className="years-bar flex-h">
          {yearsBar}
        </div>
      </div>
    )
  }

  _renderList() {
    const { news } = this.props;
    const { category, year } = this.state;

    const newsListView = news.filter(news=> {
      const filterYear = year === "old" ? !this.years.includes(news.created_at.slice(0, 4)) : news.created_at.slice(0, 4) === year;
      return (news.category === this.state.category) && filterYear
    }).map((news, index)=> {
      return (
        <a href={`/news/${news.id}`} key={index}>
          <div className="flex-h news-item">
            <div className="news-date">
              <p>{news.created_at.slice(0, 10)}</p>
              <i className="fa fa-caret-down" href="/investment"/>
            </div>
            <div className="vertical-divider"/>
            <div className="flex-v flex1 news-description">
              <p className="title">{news.title}</p>
              <p>{news.description}</p>
              <div className="flex-ase horizontal-divider"/>
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
      <div className="news-list flex-v">
        {newsListView}
      </div>
    );
  }

  _render() {
    return (
      <div className="news flex-v">
        <ImageBanner src="assets/images/news_badge.jpeg">
          <div className="image-banner flex-h">
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
