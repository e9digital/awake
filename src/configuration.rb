require 'compass'

Compass.add_project_configuration('config.rb')

configuration.preview_server_port = 3000
configuration.preview_server_host = 'localhost'
configuration.use_extensions_for_page_links = true
configuration.sass_options = Compass.sass_engine_options

configuration.haml_options = {
  :attr_wrapper => '"'
}
