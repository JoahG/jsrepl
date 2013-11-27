class CodebitsController < ApplicationController
	def index 
		@codebit = Codebit.new
		@codebit.code = ''
	end

	def show
		if Codebit.find_by_slug(params[:slug])
			@codebit = Codebit.find_by_slug(params[:slug])
		else
			redirect_to root_url
		end
	end

	def create
		@codebit = Codebit.new(params[:codebit])
		if !Codebit.find_by_code(@codebit.code)
			@codebit.save
		else
			@codebit = Codebit.find_by_code(@codebit.code)
		end
		redirect_to show_path(@codebit.slug)
	end
end
