require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Sharewin
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # The default locale is :zh-CN and all translations from config/locales/*.rb,yml are auto loaded.
    config.i18n.load_path += Dir[Rails.root.join('config', 'locales', '**/**.yml').to_s]
    config.i18n.default_locale = :'zh-CN'
    config.i18n.available_locales = [:'zh-CN', :en, :zh, :'en-US']
    config.i18n.fallbacks = { :'zh-CN' => :'zh' } # for i18n-countries-translations

  end
end
