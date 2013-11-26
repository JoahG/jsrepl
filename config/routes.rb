New::Application.routes.draw do
  get "codebits/:id" => "codebit#show", :as => "show"
  root :to => 'codebits#index'
  resources :codebits
end
