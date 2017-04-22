class Api::V1::BridgeController < ApplicationController
  def forexprotools
    uri = URI('http://tsw.ru.forexprostools.com/api.php')
    uri.query = URI.encode_www_form(forexprotools_params)

    res = Net::HTTP.get_response(uri)
    byebug
    respond_to do |format|
      format.json {
        render json: res.body
      }
    end
  end

  private

    def forexprotools_params
      parameters = params
      # parameters.delete :action
      parameters.delete :controller
      parameters.delete :format
      parameters.merge({action:'refresher'})
    end



end
