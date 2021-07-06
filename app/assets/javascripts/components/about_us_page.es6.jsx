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

    items.push(<a className="menu-item" key={'partner'} href="#partner">产业伙伴</a>)
    items.push(<a className="menu-item" key={'hornor'} href="#hornor">盛宇荣耀</a>)
    return (
      <div className="about-us-menu flex-h flex-hc flex-vc">
        {items}
      </div>
    )
  }

  _renderPanterList() {
    const { partners } = this.props;
    if (!partners) return null;

    const partnersView = partners.concat(partners.slice(0, 3)).map((partner, index)=> {
      return (
        <div className="item flex-v flex-vc flex-hc" key={`${partner.id}_${index}`} onClick={()=> this.setState({partner})}>
          <img src={partner.logo.url} />
        </div>
      );
    })
    console.log(partnersView.length)
    return (
      <div className="list flex-hc flex-h">
        {partnersView}
      </div>
    );
  }

  _renderHornorList() {
    const { hornors } = this.props;
    if (!hornors) return null;

    const hornorsView = hornors.concat(hornors.slice(0, 4)).map((hornor, index)=> {
      return (
        <div className="item flex-v flex-vc flex-hc" key={`${hornor.id}_${index}`}>
          <img src={hornor.image.url} alt={hornor.title} />
        </div>
      );
    })
  
    return (
      <div className="list flex-hc flex-h">
        {hornorsView}
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
      <div id={'partner'} key={'partner'} className="partner-item">
        <p className="title">
          <span className="item-s">|</span>
          <span className="item-title">产业伙伴</span>
        </p>
        {this._renderPanterList()}
      </div>
     )

     items.push(
      <div id={'hornor'} key={'hornor'} className="hornor-item">
        <p className="title">
          <span className="item-s">|</span>
          <span className="item-title">盛宇荣耀</span>
        </p>
        {this._renderHornorList()}
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
              <a className="web flex-ase" href={partner.website}  target="_blank" >{partner.website}</a>
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

