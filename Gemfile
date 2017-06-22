source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.3'
# Use postgreSQL  as the database for Active Record
gem 'pg'
# Use Puma as the app server
gem 'puma', '~> 3.0'
# Use SCSS for stylesheets
gem 'bootstrap-sass', '~> 3.3.6'
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby
# let your Gemfile do the configuring (http://github.com/indirect/haml-rails)
gem 'haml-rails'
# Integrate React.js with Rails views and controllers, the asset pipeline, or webpacker.
gem 'react-rails'
# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# An open-source project to capture the spirit and challenges of the Rails internationalization world
gem 'rails-i18n'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Flexible authentication solution for Rails with Warden
gem 'devise'
gem 'devise-bootstrap-views'
gem 'devise-i18n'

# RailsAdmin is a Rails engine that provides an easy-to-use interface for managing your data
gem 'rails_admin', '~> 1.2'

# Classier solution for file uploads for Rails, Sinatra and other Ruby web frameworks
gem 'carrierwave', '~> 1.0'
gem 'mini_magick'

# Automatic Ruby code style checking tool. (http://github.com/bbatsov/rubocop)
gem 'rubocop', require: false
# Font-Awesome SASS gem for use in Ruby on Rails projects
gem 'font-awesome-sass'

# CKEditor is a WYSIWYG text editor designed to simplify web content creation
gem 'ckeditor'
gem 'listen', '~> 3.0.5'
gem 'passenger'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
  gem 'capistrano-rails'
  gem 'capistrano-rvm'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
   gem 'web-console', '>= 3.3.0'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'rails-erd'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
