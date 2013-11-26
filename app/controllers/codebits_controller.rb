class CodebitsController < ApplicationController
	def index 
		@codebit = Codebit.new
		@codebit.code = ''
	end

	def show
		@codebit = Codebit.find_by_slug(params[:slug])
	end

	def create
		@codebit = Codebit.new(params[:codebit])
		@codebit.save
		redirect_to show_path(@codebit.id)
	end
end
