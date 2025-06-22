require 'rails_helper'

RSpec.describe 'Home' do
  describe 'GET /products' do
    it '200が帰る' do
      get '/products'
      expect(response).to have_http_status :ok
    end
  end
end
