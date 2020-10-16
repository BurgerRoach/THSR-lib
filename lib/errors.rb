# frozen_string_literal: true

module Errors
  # HTTP Error
  class BadRequest < StandardError; end
  class Unauthorized < StandardError; end
  class NotFound < StandardError; end

  # Options Error
  class OptionsError < StandardError; end

  # ID format Error
  class IDFormatError < StandardError; end

  # ID format Error
  class StrFormatError < StandardError; end
end
