class UsersController < ApplicationController
    skip_before_action :authorize_user, only: [:create]

    def index
        render json: User.all
    end 
    def show
        if current_user
            render json: current_user, status: :ok
          else
            render json: "No current session stored", status: :unauthorized
          end
    end 
    
    def create
        user = User.create!(username: params[:username], password: params[:password])
        session[:current_user] = user.id
        render json: user, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end 

   

    private 

    def user_params
        params.permit(:username, :password)
    end 
end
