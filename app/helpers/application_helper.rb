module ApplicationHelper

  def error_label(method, text = nil, options = {})
    html_classes = options.delete(:class) || []
    html_classes << 'error-message' unless object.errors[method].empty?
    
    label(method, text, options.merge(:class => html_classes.compact.join(' ')))
  end

  def error_label_if(method, text = nil, options = {})
    errors = object.errors[method]
    error_label(method, errors.to_a.join("<br />").html_safe, options) unless errors.empty?
  end

end
