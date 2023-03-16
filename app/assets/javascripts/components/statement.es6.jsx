class Statement extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="statement">
        <a href="/home">
          <img src="assets/images/statement1.jpg" className="statement_image"/>
        </a>
        <div className="bottom_info">
          <p className="copyright">{`版权声明  Copyright@ 盛宇基金${new Date().getFullYear()} `}
            <a href="https://beian.miit.gov.cn/" target="_blank">沪ICP备06054643号-1</a>
          </p>
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
