Rails.application.routes.draw do
  root 'home#index'

  get "up" => "rails/health#show", as: :rails_health_check
  get "signages", to: "signages#index"
  get 'signages/enable', to: 'signages#enable_signage', as: :enable_signage
  get 'signages/disable', to: 'signages#disable_signage', as: :disable_signage

  get "alerts", to: "alerts#index"
end
