class ProductDecorator < ApplicationDecorator
  def truncated_description
    description.truncate(40, omission: '...')
  end
end
