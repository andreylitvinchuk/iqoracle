class Api::V1::EventsController < ActionController::API
  def index
    metrix = Metrix.find(params[:metrix_id])

    render json:{
        events: metrix.events,
        metrix: metrix
    }
  end

  def upcoming
    metrix = Metrix.find(params[:metrix_id])

    render json:{
        events: metrix.events.upcoming,
        metrix: metrix
    }
  end

  def show

  end


end
