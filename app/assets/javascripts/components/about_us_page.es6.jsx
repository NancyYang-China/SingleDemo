class AboutUsPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      partner: null
    }
  }

  _renderMenu() {
    const { infos } = this.props
    const items = infos.map(info=> {
      return (
        <a className="menu-item" key={info.id} href={`#${info.id}`}>{info.title}</a>
      );
    });

    items.push(<a className="menu-item" key={0} href="#0">产业伙伴</a>)
    return (
      <div className="about-us-menu flex-h flex-hc flex-vc">
        {items}
      </div>
    )
  }

  _renderPanterList() {
    const { partners } = this.props;
    if (!partners) return null;

    const partnersView = partners.map(partner=> {
      return (
        <div className="item flex-v flex-vc flex-hc" key={partner.id} onClick={()=> this.setState({partner})}>
          <img src={partner.logo.url} />
        </div>
      );
    })

    var count = (3 - partners.length%3)%3
    for(var i = 0; i < count; i++){
      partnersView.push(
        <div key={`others-${i}`} className="empty-item" />
      ) 
    }
  
    return (
      <div className="list flex-vw flex-hc flex-h">
        {partnersView}
      </div>
    );
  }

  _renderContent() {
    const { infos } = this.props
    const items = infos.map(info=> {
      return (
        <div id={info.id} key={info.id} className="item-card">
          <p>
            <span className="item-s">|</span>
            <span className="item-title">{info.title}</span>
          </p>
          <div className="flex-h item-content">
            <p className="content flex1">{info.description}</p>
            <img className="asset" src={info.asset.url}/>
          </div>
        </div>
      );
    });

    items.push(
      <div id={0} key={0} className="partner-item">
        <p className="title">
          <span className="item-s">|</span>
          <span className="item-title">产业伙伴</span>
        </p>
        {this._renderPanterList()}
      </div>
     )

    return (
      <div className="about-us-items flex-v flex-asc">
        {items}
      </div>
    )
  }

  _renderModal() {
    const { partner } = this.state;
    if (!partner) return null;
    return (
      <div id="partnerModal" className="modal" style={{display: partner ? "block" : "none"}}
           onClick={()=> this.setState({partner: null})}>
        <div className="modal-content">
          <span className="close">&times;</span>
          <div className="partner-view">
            <div className="flex-h top-view">
              <img className="partner-model-logo" src={partner.logo.url}/>
              <a className="web" href={partner.website}  target="_blank" >{partner.website}</a>
            </div>
            <div className="content-view">
              <div className="content-header">
                <span className="v-line">|</span>
                <span className="title">{partner.name}</span>
              </div>
              <p className="description">{partner.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="about_us flex-v">
        <HeaderBar path="/about_us"/>
        <ImageBanner tag="About us" src="assets/images/about_us_badge.jpeg" />
        {this._renderMenu()}
        {this._renderContent()}
        {this._renderModal()}
      </div>
    )
  }
}

