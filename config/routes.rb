Rails.application.routes.draw do
  get 'frontend/index'

  devise_for :users
  root to: 'dashboard#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
