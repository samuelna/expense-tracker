# frozen_string_literal: true

require "json"

module ResponseHelper
  def json_body
    res = JSON.parse(response.body)

    if res.respond_to?(:with_indifferent_access)
      res.with_indifferent_access
    else
      res
    end
  end
end

RSpec.configure do |config|
  config.include(ResponseHelper)
end
