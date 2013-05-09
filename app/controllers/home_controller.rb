class HomeController < ApplicationController
  def index    
    @message = Message.new
  end

  def create
    @message = Message.new(params[:message])
    
    if @message.valid?
      NotificationsMailer.new_message(@message).deliver
      redirect_to(root_path, :notice => t("helpers.message.submit.successfull"))
    else
      flash.now.alert = t("helpers.message.submit.failed")
      render :index
      # redirect_to(root_path, :anchor => "contact")
    end
  end

end
