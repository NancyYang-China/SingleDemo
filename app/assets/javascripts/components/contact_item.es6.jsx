class ContactItem extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const { name, icon, active, children, onMouseOver, href } = this.props;
    const color = active ? "#a80309" : "#757575"
    const nameview = active ? null : (
      <p style={{fontSize: 12, color: "#757575", marginTop: 12}}>{name}</p>
    );

    return (
      <a href={href} className="item flex-v flex-vc" onMouseOver={e=> onMouseOver && onMouseOver(e)}>
        <div style={{borderColor: color}} className="circle active flex-h flex-hc flex-vc">
          <span style={{color: color}} className={`${icon} flex-asc`}></span>
        </div>
        {nameview}
        <div style={{visibility: active ? false : "hidden"}} className="detail flex-v flex-hc flex-vc">
          <div className="vertical-divider"/>
          <div className="horizontal-divider"/>
          {children}
        </div>
      </a>
    );
  }
}