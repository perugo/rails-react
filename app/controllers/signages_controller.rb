class SignagesController < ApplicationController
  def index; end

  def enable_signage
    session[:is_signage] = true
    @is_signage = true
  end

  def disable_signage
    session[:is_signage] = false
    @is_signage = false
    redirect_to signages_path, notice: 'Signage mode disabled.'
  end
end
