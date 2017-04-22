Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'bridge/forexprotools'
    end
  end

  get 'bridge/forexprotools'

  get 'frontend/index'

  devise_for :users
  root to: 'dashboard#index'

  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      get  'authorize', to: 'authorize#authorize'

      post 'authorize', to: 'authorize#authorize'
      post 'come_out',  to: 'authorize#come_out'

      get 'forexprotools', to: 'bridge#forexprotools'
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
