class UserRate::Create
  include Interactor::Organizer

  # required context
  # user
  # user_rate_params{
  #   :event_id,
  #   :rate_points,
  #   :rate_type,
  #   :rate_value,
  #   :rate_direction
  # }
  #

  class Action
    include Interactor

    def call
      user = define_user
      context.fail!(error:'User is not set')  if user.blank?

      # event = context.event
      # context.fail!(error:'Event is not set') if event.blank?

      user_rate_params = context.user_rate_params.merge({user: user})
      rate = UserRate.create(user_rate_params)

      if rate.persisted?
        context.rate = rate
      else
        context.fail!(error: 'Rate save error')
      end
      context.rate_points = context.user_rate_params[:rate_points]
    end

    def rollback
      context.rate.destroy
    end

    private
      def define_user
        context.user || User.find(user_id)
      end
  end

  organize Action, User::TakeOffRatePoints
end