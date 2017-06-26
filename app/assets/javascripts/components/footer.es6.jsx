class Footer extends React.Component {
  constructor(props) {
    super(props)
    
    this.menus = [{
      title: '关于我们',
      items: [{
        path: '/about_us#2',
        name: '盛宇简介'
      }, {
        path: '/about_us#3',
        name: '价值观与愿景'
      }, {
        path: '/about_us#4',
        name: '投资团队'
      }, {
        path: '/about_us#5',
        name: '投资策略'
      }, {
        path: '/about_us#0',
        name: '合作伙伴'
      }]
    }, {
      title: '投资组合',
      items: [{
        path: '/investment',
        name: '投资组合'
      }, {
        path: '/investment',
        name: 'TMT'
      }, {
        path: '/investment',
        name: '医疗健康'
      }, {
        path: '/investment',
        name: '新产业'
      }, {
        path: '/investment',
        name: '其他行业'
      }]
    }, {
      title: '公司动态',
      items: [{
        path: '/news',
        name: '公司新闻'
      }, {
        path: '/news',
        name: '观点分享'
      }]
    }, {
      title: '盛资汇',
      items: [{
        path: '/shengzihui',
        name: '盛资汇'
      }]
    }, {
      title: '联系我们',
      items: [{
        path: '/about_us',
        name: '项目合作与BP通道'
      }, {
        path: '/about_us',
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
        <p className="copyright">{`版权声明  Copyright@ 盛宇基金${new Date().getFullYear()}`}</p>
      </div>
    )
  }
}
