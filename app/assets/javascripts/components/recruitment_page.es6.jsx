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
          <p className="email"><span className="icon fa fa-envelope-o" style={{fontSize: 24}}/>    {`请将简历投递到这里... ${email}`}</p>
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
        <div className="recruitment-content">
          <p className="recruitment-title">职位招聘</p>
          {this._renderList()}
        </div>
      </div>
    )
  }
}


