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
      <a href={href} className="item" onMouseOver={e=> onMouseOver && onMouseOver(e)}>
        <div style={{borderColor: color}} className="circle active">
          <span style={{color: color}} className={icon}></span>
        </div>
        {nameview}
        <div style={{visibility: active ? false : "hidden"}} className="detail">
          <div className="vertical-divider"/>
          <div className="horizontal-divider"/>
          {children}
        </div>
      </a>
    );
  }
}