class User::IssueRatePoints
  include Interactor::Organizer

  class Action
    include Interactor

    def call()
      User.all.each{|user| user.update_attribute(:rate_points, 5)}
    end
  end

  organize Action
end