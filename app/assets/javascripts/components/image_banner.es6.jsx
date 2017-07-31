class ImageBanner extends React.Component {

  render() {
    const { tag, src, children } = this.props;
    const subView = children ? children : (
      <p>{tag}</p>
    );

    return (
      <div className="banner">
        <img className="full-width banner-image" src={src}/>
        <div className="full-width mobile-banner-image" style={{backgroundImage: `url(${src.replace(".jpeg", "_mobile.jpeg")})`}}/>
        <div id="banner-tag">
          {subView}
        </div>
        <div id="line"/>
      </div>
    )
  }
}