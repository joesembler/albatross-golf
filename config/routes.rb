Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get '/authorized_user', to: "users#show"
  get '/', to: 'root#show'

  post '/login', to: "sessions#login"
  
  post '/users', to: "users#create"

  get "/me", to: "users#show"

  delete "/logout", to: "sessions#logout"
end
