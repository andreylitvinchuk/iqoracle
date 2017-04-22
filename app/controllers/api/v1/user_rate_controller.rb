class Api::V1::UserRateController < ActionController::API
  def create
    res = UserRate::Create.call({
        user: current_user,
        user_rate_params: user_rate_params})

    if res.success?
      render json:{
          status: 'success',
          user: res.user.as_json,
          timestamp: DateTime.now
      }
    else
      render json:{
          status: 'error',
          message: res.error,
          timestamp: DateTime.now
      }
    end


  end

  def user_rate_params
    params.permit(
        :event_id,
        :rate_points,
        :rate_type,
        :rate_value,
        :rate_direction
    )
  end
end
