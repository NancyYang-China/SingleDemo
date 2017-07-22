class SlideBanner extends React.Component {

  _renderBanner(banner, index) {
    const className = index === 0 ? "item active" : "item"
    const contentClass = `content banner${index} flex-v`
    const subTitle = `sub-title-${index === 0 ? 21 : 16}`

    const contentView = index === 3 ? (
      <div className="flex-h banner3">
        <p className="sub-title flex-ase">{banner.sub_title}</p>
        <div className="vertical-divider flex-asc" />
        <img className="icon" src={banner.icon.url} />
      </div>
    ) : (
      <div className={contentClass}>
        <p className="title">{banner.title}</p>
        <div className="horizontal-divider flex-asc" />
        <p className={subTitle}>{banner.sub_title}</p>
      </div>
    )
    return (
      <div key={index} className={className}>
        <img src={banner.image.url} className='full-width'/>
        {contentView}
      </div>
    );
  }

  render() {
    const bannersView = this.props.banners.map((banner, index)=> {
      return this._renderBanner(banner, index)
    })

    return (
      <div id="myCarousel" className="carousel slide"
           data-ride="carousel" data-interval={8000} data-pause={false}>
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active" />
          <li data-target="#myCarousel" data-slide-to="1" />
          <li data-target="#myCarousel" data-slide-to="2" />
          <li data-target="#myCarousel" data-slide-to="3" />
        </ol>
        <div className="carousel-inner">
          {bannersView}
        </div>
      </div>
    );
  }
}
