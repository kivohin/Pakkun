class UsersController < ApplicationController
	def new
		render 'new'
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
