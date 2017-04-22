require 'rails_helper'

RSpec.describe BridgeController, type: :controller do

  describe "GET #forexprotools" do
    it "returns http success" do
      get :forexprotools
      expect(response).to have_http_status(:success)
    end
  end

end
