class ImageBanner extends React.Component {

  render() {
    const { tag, src, children } = this.props;
    const subView = children ? children : (
      <p>{tag}</p>
    );

    return (
      <div className="banner">
        <img className="full-width" src={src}/>
        <div id="banner-tag">
          {subView}
        </div>
        <div id="line"/>
      </div>
    )
  }
}