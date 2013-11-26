class CodebitsController < ApplicationController
	def index 
	end

	def show
		@codebit = Codebit.find(params[:id])
	end

	def create
		@codebit = Codebit.new(params[:codebit])
		@codebit.save
		redirect_to show_path(codebit.id)
	end
end
