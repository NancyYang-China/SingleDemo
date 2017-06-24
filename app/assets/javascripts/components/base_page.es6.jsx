class BasePage extends React.Component {

  _render() { return null }

  _path() { return "" }

  render() {
    return (
      <div>
        <HeaderBar path={this._path()}/>
        {this._render()}
        <Footer />
      </div>
    )
  }
}