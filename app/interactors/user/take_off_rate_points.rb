class User::TakeOffRatePoints
  include Interactor::Organizer

  class Action
    include Interactor

    def call()
      user = define_user

      context.fail!(error: 'User is not set') if user.blank?
      context.fail!(error: 'Rate Points is not set') if context.rate_points.blank?
      context.fail!(error: 'User doesn\'t have enought points') if user.rate_points.to_i < context.rate_points.to_i

      user.update_attribute(:rate_points, user.rate_points - context.rate_points.to_i)
    end

    def rollback
      user = define_user
      user.update_attribute(:rate_points, user.rate_points + context.rate_ponts)
    end

    private
      def define_user
        context.user || User.find(user_id)
      end
  end

  organize Action
end