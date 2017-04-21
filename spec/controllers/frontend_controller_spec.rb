require 'rails_helper'

RSpec.describe FrontendController, type: :controller do

  describe "GET #indec" do
    it "returns http success" do
      get :indec
      expect(response).to have_http_status(:success)
    end
  end

end
