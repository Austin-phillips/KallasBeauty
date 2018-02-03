class Api::ImagesController < ApplicationController

  def index
    render json: Image.all.order(created_at: :desc)
  end

  def destroy
    @image = Image.find(params[:id])
    @image.destroy
  end

  def create
    auth = {
      cloud_name: ENV["CLOUD_NAME"],
      api_key: ENV["CLOUD_API_KEY"],
      api_secret: ENV["CLOUD_API_SECRET"]
    }
    begin
      cloud_photo = Cloudinary::Uploader.upload(params[params.keys.first],auth)
      image = Image.create(publicId: cloud_photo['public_id'])
      render json: image
    rescue => e 
      render json: { error: e }, status: :bad_request
    end
  end

end
