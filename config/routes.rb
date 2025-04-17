Rails.application.routes.draw do
  root 'home#index'

  get "up" => "rails/health#show", as: :rails_health_check
  get "index2", to: "home#index2", as: :index2
end
