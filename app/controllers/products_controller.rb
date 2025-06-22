class ProductsController < ApplicationController
  def index
    per_page = params[:per_page] || 20
    @products = Product.order(:created_at).page(params[:page]).per(per_page)
  end
end
