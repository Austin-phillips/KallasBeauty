Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :services
    resources :appointments
    resources :days do
      resources :time_slots 
    end 
    resources :images
  end
  get 'all_app', to: 'api/appointments#all_app'

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
