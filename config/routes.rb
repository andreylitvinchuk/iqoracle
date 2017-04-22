Rails.application.routes.draw do

  get 'frontend/index'

  devise_for :users
  root to: 'dashboard#index'

  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      get  'authorize', to: 'authorize#authorize'

      post 'authorize', to: 'authorize#authorize'
      post 'come_out',  to: 'authorize#come_out'

      get 'forexprotools', to: 'bridge#forexprotools'

      post 'user_rates/create'

      resources :metrixes do
        get 'events', to: 'events#index'
        get 'upcoming_events', to: 'events#upcoming'
      end

      resources :events do
        get 'user_rates/binary', to: 'user_rates#binary'
        get 'user_rates/agregate', to: 'user_rates#agregate'
      end

    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
