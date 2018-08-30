class NewUserEmailMailer < ApplicationMailer
  def new_user_email(user)
    @user = user
    mail(to: @user.email, subject: "Welcome To Blissful Beauty", from: "jaiden4blissfulbeauty@gmail.com")
  end 
end
