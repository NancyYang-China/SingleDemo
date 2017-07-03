class RecruitmentPage extends BasePage {

  constructor(props) {
    super(props)

  }

  _renderList() {
    const { recruitments } = this.props;

    const recruitmentViews = recruitments.map((recruitment, index)=> {
      var email = recruitment.email || "info@sharewin.com"
      var divider = (recruitments.length - index > 1) ? <div className="horizontal-divider"/> : null
      return (
        <div className="recruitment-item" key={index}>
          <p className="title">{`${recruitment.title}  ${recruitment.count}位`}</p>
          <p className="sub-title">职责说明</p>
          <p className="sub-content">{recruitment.description}</p>
          <p className="sub-title">职位要求</p>
          <p className="sub-content">{recruitment.requirement}</p>
          <p className="email"><span className="icon fa fa-envelope-o" style={{fontSize: 24}}/>    {`请将简历投递到这里... `}<span className="email-address">{email}</span></p>
          {divider}
        </div>
      );
    })

    return (
      <div className="recruitment-list flex-v">
        {recruitmentViews}
      </div>
    );
  }

  _render() {
    return (
      <div className="recruitment flex-v">
        <div className="full-width">
          <img className="image" src="assets/images/contact_us_badge.jpeg"/>
        </div>
        <div className="recruitment-content flex-asc">
          <div className="recruitment-top-bar">
            <p className="recruitment-title">职位招聘</p>
            <a href="javascript:history.back();">
              <div className="back-content flex-ase">
                <p className="flex-asc">
                  返回<i className="fa fa-angle-left" />
                </p>
              </div>
            </a>
          </div>
          {this._renderList()}
        </div>
      </div>
    )
  }
}


