class AboutUsPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      partner: null,
      page: 0,
      hornorPage: 0,
    }
    this.timer = null
  }

  autoScroll() {
    console.log("Auro Scroll")
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      const hornorPage = this.state.hornorPage + 1
      if (hornorPage < Math.ceil(this.props.hornors.length / 4)) {
        this.setState({hornorPage}, this.autoScroll);
      } else {
        this.setState({ hornorPage: 0 }, this.autoScroll);
      }
    }, 5000)
  }

  componentDidMount(){
    this.autoScroll()
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
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

    const partnersView = partners.map((partner, index)=> {
      return (
        <div className="item flex-v flex-vc flex-hc" key={`${partner.id}_${index}`} onClick={()=> this.setState({partner})}>
          <img src={partner.logo.url} />
        </div>
      );
    })

    for(var i=0; i < (3 - partners.length % 3) % 3; i++){
      partnersView.push(<div className="item flex-v flex-vc flex-hc" key={partners.length + i}><img/></div>)
    }

    return (
      <div className="list flex-hc flex-h" style={{width: Math.ceil(partners.length / 3) * 3 * 408, marginLeft: this.state.page * 408 * 3 * -1}}>
        {partnersView}
      </div>
    );
  }

  _renderHornorList() {
    const { hornors } = this.props;
    if (!hornors) return null;

    const hornorsView = hornors.map((hornor, index)=> {
      return (
        <div className="item flex-v flex-vc flex-hc" key={`${hornor.id}_${index}`}>
          <img src={hornor.image.url} alt={hornor.title} />
        </div>
      );
    })
    for(var i=0; i < (4 - hornors.length % 4) % 4; i++){
      hornorsView.push(<div className="item flex-v flex-vc flex-hc" key={hornors.length + i}><img/></div>)
    }

    return (
      <div className="list flex-hc flex-h" style={{width: Math.ceil(hornors.length / 4) * 4 * 306, marginLeft: this.state.hornorPage * 306 * 4 * -1}}>
        {hornorsView}
      </div>
    );
  }

  _renderContent() {
    const { infos, partners, hornors } = this.props
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
      <div className="flex-h flex-vc">
        <button disabled={this.state.page === 0} type="button" className="control-arrow-left"
          onClick={() => {
            const page = this.state.page - 1
            if (page >= 0) {
              this.setState({page: page});
            }
          }
        }>
          {String.fromCharCode(9668)}
        </button>
        <div id={'partner'} key={'partner'} className="partner-item">
          <p className="title">
            <span className="item-s">|</span>
            <span className="item-title">产业伙伴</span>
          </p>
          {this._renderPanterList()}
        </div>
        <button disabled={this.state.page === (Math.ceil(partners.length / 3) - 1)} type="button" className="control-arrow-right"
          onClick={() => {
            const page = this.state.page + 1
            if (page < Math.ceil(partners.length / 3)) {
              this.setState({page: page});
            }
          }
        }>
          {String.fromCharCode(9658)}
        </button>
      </div>
    )

    items.push(
      <div className="flex-h flex-vc">
        <button disabled={this.state.hornorPage === 0} type="button" className="control-arrow-left"
          onClick={() => {
            const hornorPage = this.state.hornorPage - 1
            if (hornorPage >= 0) {
              this.setState({hornorPage});
            }
          }
        }>
          {String.fromCharCode(9668)}
        </button>
        <div id={'hornor'} key={'hornor'} className="hornor-item">
          <p className="title">
            <span className="item-s">|</span>
            <span className="item-title">盛宇荣耀</span>
          </p>
          {this._renderHornorList()}
        </div>
        <button disabled={this.state.hornorPage === (Math.ceil(hornors.length / 4) - 1)} type="button" className="control-arrow-right"
            onClick={() => {
              const hornorPage = this.state.hornorPage + 1
              if (hornorPage < Math.ceil(hornors.length / 4)) {
                this.setState({hornorPage});
              }
            }
          }>
          {String.fromCharCode(9658)}
        </button>
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
        <FloatStatement />
        <ImageBanner tag="About us" src="assets/images/about_us_badge.jpeg" />
        {this._renderMenu()}
        {this._renderContent()}
        {this._renderModal()}
      </div>
    )
  }
}

