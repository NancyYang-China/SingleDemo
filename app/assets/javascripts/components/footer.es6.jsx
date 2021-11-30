class Footer extends React.Component {
  constructor(props) {
    super(props)

    var aboutUsItems = this.props.infos.map(info=> {
      return {
        path: `/about_us#${info.id}`,
        name: info.name
      }
    })
    aboutUsItems.push({ path: '/about_us#partner', name: '产业伙伴' })
    aboutUsItems.push({ path: '/about_us#hornor', name: '盛宇荣耀' })
    console.log(aboutUsItems);

    var investmentsItems = this.props.inCas.map(inca=> {
      return {
        path: `/investment?c=${inca.id}`,
        name: inca.name
      }
    })

    this.menus = [{
      title: '关于我们',
      items: aboutUsItems
    }, {
      title: '投资组合',
      items: investmentsItems
    }, {
      title: '公司动态',
      items: [{
        path: '/news?category=news',
        name: '公司新闻'
      }, {
        path: '/news?category=dynamic',
        name: '组合动态'
      }, {
        path: '/news?category=point',
        name: '观点分享'
      }, {
        path: '/news?category=recruit',
        name: '招聘'
      }]
    // }, {
    //   title: '盛资汇',
    //   items: [{
    //     path: '/shengzihui',
    //     name: '盛资汇'
    //   }]
    }, {
      title: '联系我们',
      items: [{
        path: '/about_us',
        name: '项目合作与BP通道'
      }, {
        path: '/news?category=recruit',
        name: '招聘'
      }, {
        path: '/about_us',
        name: '微信'
      }, {
        path: '/about_us',
        name: '联系我们'
      }]
    }]
  }

  _renderlist(menu) {
    const itemViews = menu.items.map((item, index)=> {
      return (
        <li key={index}>
          <a className='item' href={item.path}>{item.name}</a>
        </li>
      )
    })

    return (
      <ul key={menu.title} className='menuList'>
        <li className='title'>{menu.title}</li>
        <li role="separator" className="divider"></li>
        {itemViews}
      </ul>
    )
  }

  render() {
    const menusView = this.menus.map(menu=> {
      return this._renderlist(menu)
    })

    return (
      <div className='footer'>
        {menusView}
        <div className="bottom_info">
          <p className="copyright">{`版权声明  Copyright@ 盛宇基金${new Date().getFullYear()} 沪ICP备06054643号-1`}</p>
          <div className="gab flex-h flex-hc">
            <a className="gab_link" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402003542">
              <img className="gab_icon" src="assets/images/ghs.png"/>
              <p className="gab_title">沪公网安备 31010402003542号</p>
            </a >
          </div>
        </div>
      </div>
    )
  }
}
