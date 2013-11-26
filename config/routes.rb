New::Application.routes.draw do
  get "/:slug" => "codebits#show", :as => "show"
  root :to => 'codebits#index'
  resources :codebits
end
