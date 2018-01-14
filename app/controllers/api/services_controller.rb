class Api::ServicesController < ApplicationController
  before_action :set_service, only: [ :show, :update, :destroy ]

  def index
    render json: Service.all
  end

  def show
    render json: @service
  end

  def create
    @service = Service.create(service_params)
    if @service.save
      render json: @service
    else
      render json: { errors: app.errors.full_message.join(',')}, status: 422
    end 
  end

  def update
    if @service.update(service_params)
      render json: @service
    else
      render json: { errors: @app.errors.full_message.join(',')}, status: 422 
    end 
  end

  def destroy
    @service.destroy
  end

  private

  def set_service
    @service = Service.find(params[:id])
  end 

  def service_params
    params.require(:service).permit( :name, :price, :description, :time)
  end 

end
