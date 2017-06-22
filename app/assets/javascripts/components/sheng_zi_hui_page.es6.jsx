class ShengZiHuiPage extends React.Component {

  _renderBanner() {
    const { banner } = this.props

    return (
      <div className="banner">
        <img className="full-width" src="assets/szh_badge.jpeg"/>
        <div className="banner-tag">
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
      console.log(item);
      return (
        <div key={i} className="szh-item">
          <div className="top-content">
            <div/>
            <p>{item.created_at.slice(0, 10)}</p>
          </div>
          <div className="szh-item-content">
            <div className="main-content">
              <p className="title">{item.title}</p>
              <p className="content">{item.content}</p>
            </div>
            <div className="assets">
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

  render() {
    return (
      <div className="szh">
        {this._renderBanner()}
        {this._renderList()}
      </div>
    )
  }
}
