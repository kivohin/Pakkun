class UsersController < ApplicationController
	def new
		render 'new'
	end

	def create
		user = User.new(user_params)
		if user.save
			redirect_to '/plant_locations'

		else
			redirect_to 'users/new'
		end
	end

	def show
		url_id = params[:id].to_i
		@user = User.find_by(id: url_id)
	end

	private

	def user_params
		params.require(:user).permit(
			:username,
			:email,
			:password,
			:password_confirmation)
	end
end
