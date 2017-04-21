source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.0.2'

# extentions
gem 'devise', '~> 4.2.0'
gem 'rolify', '~> 5.1.0'
gem 'paperclip', '~> 5.1.0'
gem 'russian', '~> 0.6'
gem 'meta-tags', '~> 2.4.0'
gem 'kaminari', '~> 0.17'
gem 'ransack', '~> 1.8.2'

# devops
gem 'mina'
gem 'mina-multistage', require: false
gem 'mina-puma', require: false

# abstraction
gem 'interactor', ' ~> 3.1.0'

# views
gem 'slim-rails', '~> 3.1.1'

# assets
gem 'webpack-rails'
gem 'react-rails'
gem 'foreman'
gem 'listen', '~> 3.0.5'
gem 'inline_svg', '~> 1.2.0'

# standard
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.0'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'jbuilder', '~> 2.5'

group :development, :test do
  gem 'byebug', platform: :mri

  gem 'rspec-rails', '~> 3.5.2'
  gem 'capybara', '~> 2.7.1'
  gem 'database_cleaner', '~> 1.5.3'
  # gem 'rspec-its', require: 'rspec/its'
  gem 'factory_girl_rails', '~> 4.7.0'
  gem 'ffaker', '~> 2.2.0'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'

  gem 'guard'
  gem 'guard-rspec', require: false
  gem 'guard-bundler', require: false
  gem 'guard-foreman', require: false
  gem 'guard-npm', require: false
  gem 'guard-migrate', require: false
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
