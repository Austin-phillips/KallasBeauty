Rails.application.routes.draw do
  root "application#index"
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :services
    resources :appointments
    resources :days do
      resources :time_slots 
    end 
    resources :images
  end
  post 'schedule', to: 'api/schedules#create'
  get 'all_app', to: 'api/appointments#all_app'
  get 'last_date', to: 'api/schedules#last_date'

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
