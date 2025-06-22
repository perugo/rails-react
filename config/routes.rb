Rails.application.routes.draw do
  root 'home#index'

  resources :products, only: %i[index]

  get "up" => "rails/health#show", as: :rails_health_check
end
