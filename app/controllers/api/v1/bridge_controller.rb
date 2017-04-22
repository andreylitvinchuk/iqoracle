class Api::V1::BridgeController < ActionController::API
  def forexprotools
    uri = URI('http://tsw.ru.forexprostools.com/api.php')
    uri.query = URI.encode_www_form(forexprotools_params)

    res = Net::HTTP.get_response(uri)

    render json: res.body

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
