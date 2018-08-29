class NewUserEmailMailer < ApplicationMailer
  def new_user_email(user)
    @user = user
    mail(to: @user.email, subject: "Welcome To Blissful Beauty", from: "phillips.austin51@gmail.com")
  end 
end
