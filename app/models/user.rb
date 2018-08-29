class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
          
  has_many :appointments
  include DeviseTokenAuth::Concerns::User

  after_create :new_user_email
  def new_user_email
    NewUserEmailMailer.new_user_email(self).deliver
  end 
  end
