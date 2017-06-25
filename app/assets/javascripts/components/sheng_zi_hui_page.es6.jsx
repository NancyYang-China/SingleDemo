class ShengZiHuiPage extends BasePage {

  _path() {
    return "/shengzihui"
  }

  _renderBanner() {
    const { banner } = this.props

    return (
      <div className="banner">
        <img className="full-width" src="assets/images/szh_badge.jpeg"/>
        <div className="banner-tag flex-h">
          <img className="icon" src={banner.icon.url} />
          <div className="vertical-divider" />
          <p className="sub-title">{banner.sub_title}</p>
        </div>
        <div id="line"/>
      </div>
    )
  }

  _renderList() {
    const { news } = this.props;

    const newsListView = news.map((item, i)=> {
      const assetsView = item.assets.length > 0 ? item.assets.map((asset, index)=> {
        return <img key={index} className="asset" src={asset} />
      }) : null
      return (
        <div key={i} className="szh-item flex-v flex1">
          <div className="top-content flex-h">
            <div/>
            <p>{item.created_at.slice(0, 10)}</p>
          </div>
          <div className="szh-item-content flex-h">
            <div className="main-content">
              <p className="title">{item.title}</p>
              <p className="content">{item.content}</p>
            </div>
            <div className="assets flex-v">
              {assetsView}
            </div>
          </div>
          <div className="horizontal-divider" />
        </div>
      );
    })

    return (
      <div className="szh-list">
        {newsListView}
      </div>
    );
  }

  _render() {
    return (
      <div className="szh flex-v">
        {this._renderBanner()}
        {this._renderList()}
      </div>
    )
  }
}
