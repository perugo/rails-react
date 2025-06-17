class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern
  before_action :set_is_signage

  private

  def set_is_signage
    # セッションから `is_signage` を取得し、インスタンス変数に設定
    @is_signage = session[:is_signage] || false
  end
end
