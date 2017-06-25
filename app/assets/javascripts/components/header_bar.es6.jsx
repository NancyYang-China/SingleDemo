class HeaderBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
    this.menus = [{
      path: '/about_us',
      name: '关于我们'
    }, {
      path: '/investment',
      name: '投资组合'
    }, {
      path: '/news',
      name: '公司动态'
    }, {
      path: '/shengzihui',
      name: '盛资汇'
    }, {
      path: '/contact_us',
      name: '联系我们'
    }]
  }

  render () {
    const { path } = this.props
    var menuItems = [];
    this.menus.forEach(menu=> {
      const color = path.includes(menu.path) ? "#a80309" : "#000000"
      menuItems.push(
        <a key={menu.path} style={{color}} className='menu-item' href={menu.path}>
          {menu.name}
        </a>
      )
    })

    var pp = path === "/news/show" ? '../' : ''

    return (
      <div className='top-bar'>
        <div className='forground'/>
        <div className='menu-content'>
          <a className='nav-logo' href='/'>
            <img className='nav-logo' src={`${pp}assets/images/logo.png`}/>
          </a>
          <div className='menu-bar'>
            {menuItems}
          </div>
        </div>
      </div>
    )
  }
}
