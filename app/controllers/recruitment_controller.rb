class RecruitmentController < ApplicationController
  def index
    render component: 'RecruitmentPage', props: { recruitments: Recruitment.all }
  end
end
