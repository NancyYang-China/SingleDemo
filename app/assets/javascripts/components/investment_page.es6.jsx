class InvestmentPage extends BasePage {

  constructor(props) {
    super(props)

    this.state = {
      filterType: this.props.cate || -1,
      investment: null
    }
  }

  _path() {
    return "/investment"
  }

  _renderMenuItem(item) {
    const color = item.key == this.state.filterType ? "#a80309" : "#000000"

    return (
      <a className="menu-item" key={item.key} style={{color}}
        onClick={()=> {
          this.setState({filterType: item.key})
        }}>
        {item.name}
      </a>
    );
  }

  _renderMenu() {
    const { investment_categories } = this.props
    const items = investment_categories.map(category=> {
      return this._renderMenuItem({key: category.id, name: category.name})
    })
    // items.splice(0, 0, this._renderMenuItem({key: -1, name: "全部"}))
    return (
      <div className="investment-menu flex-h flex-hc flex-vc">
        {items}
      </div>
    )
  }

  _renderlist() {
    const { investments } = this.props;
    const { filterType } = this.state;
    if (!investments) return null;

    const investmentsView = investments.filter(investment=> {
      return (filterType === -1) ? true : 
        investment.investment_category_id == filterType
    }).map(investment=> {
      return (
        <div id="investment-item" className="flex-h flex-vc flex-hc" key={investment.id} onClick={()=> this.setState({investment})}>
          <img src={investment.logo.url} />
          <p>{investment.title}</p>
        </div>
      )
    })

    var count = investmentsView.length > 8 ? (4 - investmentsView.length%4)%4 : 12 - investmentsView.length
    for(var i = 0; i < count; i++){
      investmentsView.push(
        <div key={`others-${i}`} className="empty-item" />
      ) 
    }

    return (
      <div className="list flex-h flex-vw flex-hc">
        {investmentsView}
      </div>
    )
  }

  _renderModal() {
    const { investment } = this.state;
    if (!investment) return null;
    return (
      <div id="investmentModal" className="modal" style={{display: investment ? "block" : "none"}}
           onClick={()=> this.setState({investment: null})}>
        <div className="modal-content">
          <span className="close">&times;</span>
          <div className="investment-view flex-v flex-vc">
            <a href={investment.website} target="_blank">
              <img src={investment.logo.url}/>
            </a>
            <div className="title-bar flex-h">
              <p className="title">{investment.title}</p>
              <div className="web-bar flex-h flex-vc">
                <p className="pre-web">点击了解更多详情</p>
                <a href={investment.website} target="_blank" className="website">{investment.website}</a>
              </div>
            </div>
            <div className="horizontal-divider" />
            <p className="content">{investment.description}</p>
          </div>
        </div>
      </div>
    );
  }

  _render() {
    return (
      <div className="investment flex-v">
        <ImageBanner tag="Investment Portfolio" src="assets/images/investment_badge.jpeg" />
        {this._renderMenu()}
        {this._renderlist()}
        {this._renderModal()}
      </div>
    )
  }
}


