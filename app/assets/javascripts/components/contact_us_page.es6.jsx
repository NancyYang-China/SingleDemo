class ContactUsPage extends BasePage {
  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 0
    }
  }

  _path() {
    return "/contact_us"
  }

  _render () {
    const { activeIndex } = this.state;

    return (
      <div className="contact_us flex-v">
        <img className="full-width" src="assets/images/contact_us_badge.jpeg"/>
        <div className="items flex-h flex-hc" onMouseOut={e=> {
            this.setState({activeIndex: 0});
          }}>
          <ContactItem icon="fa fa-envelope" active={activeIndex===1} href=""
            name="项目合作"
            onMouseOver={e=> {
              this.setState({activeIndex: 1});
            }}>
            <p style={{fontSize: 16, fontWeight: "bold" , color: "#a80309", marginTop: 14}}>BP 请发至</p>
            <p style={{fontSize: 16, color: "#a80309"}}>BP info@sharewin.com</p>
          </ContactItem>
          <ContactItem icon="fa fa-users" active={activeIndex===2} href="/recruitment"
            name="招聘职位"
            onMouseOver={e=> {
              this.setState({activeIndex: 2});
            }}>
              <p style={{fontSize: 16, fontWeight: "bold" , color: "#a80309", marginTop: 14}}>职位申请请发至</p>
              <p style={{fontSize: 16, color: "#a80309"}}>BP info@sharewin.com</p>
              <div href="recruitment" className="widget flex-v">
                <span className="icon fa fa-plus" style={{fontSize: 18, fontWeight: "bold"}}></span>
                <span className="text" style={{fontSize: 15, fontWeight: "bold"}}>点击了解更多职位详情</span>
              </div>
          </ContactItem>
          <ContactItem icon="fa fa-weixin" active={activeIndex===3} href=""
            name="公司微信"
            onMouseOver={e=> {
              this.setState({activeIndex: 3});
            }}>
            <img style={{width:132, height:132, marginTop: 20}} src="assets/images/qr_code.jpeg"/>
          </ContactItem>
          <ContactItem icon="fa fa-phone-square" active={activeIndex===4} href=""
            name="联系我们"
            onMouseOver={e=> {
              this.setState({activeIndex: 4});
            }}>
              <p style={{fontSize: 16, fontWeight: "bold" , color: "#a80309", marginTop: 14}}>联系我们</p>
              <p style={{fontSize: 13, color: "#000000", textAlign: "center", lineHeight: 2}}>
                <b>上海盛宇股权投资基金管理有限公司</b><br/>
                021-33563256<br/>
                xiangms@sharewin-sh.com<br/>
                上海市桂平路391号<br/>
                新漕河泾国际商务中心A座28
              </p>
          </ContactItem>
        </div>
      </div>
    );
  }
}
