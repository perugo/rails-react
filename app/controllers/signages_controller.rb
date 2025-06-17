class SignagesController < ApplicationController
  def index
    @is_signage = true # 必要に応じて条件を設定
  end

  def enable_signage
    session[:is_signage] = true
    redirect_to root_path, notice: "Signage mode enabled."
  end

  def disable_signage
    session[:is_signage] = false
    redirect_to root_path, notice: "Signage mode disabled."
  end
end
