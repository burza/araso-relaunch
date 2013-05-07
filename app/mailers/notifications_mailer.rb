class NotificationsMailer < ActionMailer::Base

  default :from => "agile media <noreply@agile-media.de>"
  default :to => "gregor.swatek@gmail.com"

  def new_message(message)
    @message = message
    mail(:subject => "[agile-media.de] #{message.subject}")
  end

end
