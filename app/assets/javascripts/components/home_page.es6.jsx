class HomePage extends BasePage {
  _render () {
    return (
      <SlideBanner banners={this.props.banners}/>
    )
  }
}