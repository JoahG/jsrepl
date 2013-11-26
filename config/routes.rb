New::Application.routes.draw do
  get "/:id" => "codebits#show", :as => "show"
  root :to => 'codebits#index'
  resources :codebits
end
