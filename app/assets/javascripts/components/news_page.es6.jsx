class NewsPage extends BasePage {

  constructor(props) {
    super(props)

    const groups = props.news.reduce((acc, item) => {
      const key = item.created_at.slice(0, 4)
      acc[key] = acc[key] || []
      acc[key].push(item)

      return acc
    }, {})

    this.state = {
      category: props.category || 'news',
    }

  }

  // componentDidMount() {
  //   var newState = {
  //     category: 'news',
  //   }
  //   if (window.category != undefined) {
  //     newState.category = window.category
  //   }
    
  //   this.setState(newState)
  // }

  // componentWillUnmount() {
  //   const { category } = this.state

  //   window.category = category
  // }

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
    return (
      <div className="news-menu flex-h flex-vc">
        <div className="flex-h">
          {this._renderMenuItem({category: "news", name: "公司新闻"})}
          <div className="vertical-divider" />
          {this._renderMenuItem({category: "dynamic", name: "组合动态"})}
          <div className="vertical-divider" />
          {this._renderMenuItem({category: "point", name: "观点分享"})}
          <div className="vertical-divider" />
          {this._renderMenuItem({category: "recruit", name: "招聘"})}
        </div>
      </div>
    )
  }

  _renderList() {
    const { news } = this.props;
    const { category } = this.state;

    const newsListView = news.filter(news=> {
      return (news.category === category)
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
