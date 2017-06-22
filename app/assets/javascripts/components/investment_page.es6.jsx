class InvestmentPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      filterType: -1,
      investment: null
    }
  }

  _renderMenuItem(item) {
    const color = item.key === this.state.filterType ? "#a80309" : "#000000"

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
    items.splice(0, 0, this._renderMenuItem({key: -1, name: "全部"}))
    return (
      <div className="investment-menu">
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
        investment.investment_category_id === filterType
    }).map(investment=> {
      return (
        <div className="item" key={investment.id} onClick={()=> this.setState({investment})}>
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
      <div className="list">
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
          <div className="investment-view">
            <div className="image">
              <img src={investment.logo.url}/>
            </div>
            <div>
              <p className="title">{investment.title}</p>
              <p className="content">{investment.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="investment">
        <ImageBanner tag="Investment Portfolio" src="assets/investment_badge.jpeg" />
        {this._renderMenu()}
        {this._renderlist()}
        {this._renderModal()}
      </div>
    )
  }
}


