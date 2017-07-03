class ContactUsPage extends BasePage {
  constructor(props) {
    super(props)

    this.state = {
      activeIndex: -1
    }

    this.items = [{
      icon: "fa fa-envelope",
      href: "",
      name: "项目合作",
      children: (
        <div>
          <p className="bold-title">BP 请发至</p>
          <p>BP info@sharewin-sh.com</p>
        </div>
      ) 
    }, {
      icon: "fa fa-users",
      href: "/recruitment",
      name: "招聘职位",
      children: (
        <div>
          <p className="bold-title">职位申请请发至</p>
          <p>zhaopin@sharewin-sh.com</p>
          <div href="recruitment" className="widget flex-v flex-vc flex-asc">
            <span className="icon fa fa-plus"></span>
            <span className="text">点击了解更多职位详情</span>
          </div>
        </div>
      )
    }, {
      icon: "fa fa-weixin",
      href: "",
      name: "公司微信",
      children: <img className="qr-code" src="assets/images/qr_code.jpeg"/>
    }, {
      icon: "fa fa-phone-square",
      href: "",
      name: "联系我们",
      children: (
        <div>
          <p className="bold-title">联系我们</p>
          <p className="company-info">
            <b>上海盛宇股权投资基金管理有限公司</b><br/>
            021-33563256<br/>
            xiangms@sharewin-sh.com<br/>
            上海市桂平路391号<br/>
            新漕河泾国际商务中心A座28
          </p>
        </div>
      )
    }];
  } 

  _path() {
    return "/contact_us"
  }

  _renderItem(item, index) {
    const { activeIndex } = this.state;
    const { icon, href, name, children } = item;
    return (
      <ContactItem key={index} icon={icon} active={activeIndex === index} href={href}
        name={name}
        onMouseOver={e=> this.setState({activeIndex: index})}>
        {children}
      </ContactItem>
    );
  }

  _render () {
    const { activeIndex } = this.state;
    const itemsView = this.items.map((item, index)=> this._renderItem(item, index));

    return (
      <div className="contact_us flex-v">
        <img className="full-width" src="assets/images/contact_us_badge.jpeg"/>
        <div className="items flex-h flex-hc" onMouseOut={e=> this.setState({activeIndex: -1})}>
          {itemsView}
        </div>
      </div>
    );
  }
}
