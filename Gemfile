# frozen_string_literal: true

source 'https://rubygems.org'
ruby File.read('.ruby_version').strip

# Networking
gem 'json'

# Database
gem 'hirb'
gem 'hirb-unicode'
gem 'sequel', '~> 5.0'

group :development, :test do
  gem 'database_cleaner', '~> 1.8'
  gem 'sqlite3', '~> 1.4'
end

group :production do
  gem 'pg'
end

# Testing
group :test do
  gem 'headless', '~> 2.3'
  gem 'minitest', '~> 5.0'
  gem 'minitest-rg', '~> 5.0'
  gem 'simplecov', '~> 0'
  gem 'vcr', '~> 6.0'
  gem 'watir', '~> 6.17'
  gem 'webmock', '~> 3.0'
end

group :development, :test do
  gem 'rerun', '~> 0.13'
end

gem 'debase', '~> 0.2'
gem 'ruby-debug-ide', '~> 0.7'

# Web Application
gem 'econfig', '~> 2.1'
gem 'puma', '~> 3.11'
gem 'roda', '~> 3.8'
gem 'sassc'
gem 'slim', '~> 3.0'
gem 'rack', '~> 2' # 2.3 will fix delegateclass bug

# Validation
gem 'dry-struct', '~> 1.3'
gem 'dry-types', '~> 1.4'

# Quality
group :development, :test do
  gem 'flog'
  gem 'reek'
  gem 'rubocop'
end

# Utilities
gem 'rake'
