class ImageBanner extends React.Component {

  render() {
    const { tag, src, children } = this.props;
    const subView = children ? children : (
      <p>{tag}</p>
    );

    return (
      <div className="banner">
        <img className="full-width banner-image" src={src}/>
        <img className="full-width mobile-banner-image" src={src.replace(".jpeg", "_mobile.jpeg")}/>
        <div id="banner-tag">
          {subView}
        </div>
        <div id="line"/>
      </div>
    )
  }
}