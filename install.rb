Rake::Task['livepipe_ui:install:javascripts'].invoke
## Install hook code here
#puts "Copying LivePipe UI Assets..."
#
##copy lib files
#dest_file = File.join(RAILS_ROOT,"public","javascripts","resizable.js")
#src_file = File.join(File.dirname(__FILE__),"lib","resizable.js")
#FileUtils.cp_r(src_file, dest_file)
#
##copy src files
#[
#  "cookie.js",
#  "event_behavior.js",
#  "hotkey.js",
#  "livepipe.js"
#].each do |js_file|
#  dest_file = File.join(RAILS_ROOT,"public","javascripts",js_file)
#  src_file = File.join(File.dirname(__FILE__),"src",js_file)
#  FileUtils.cp_r(src_file,dest_file)
#end
#
#puts "LivePipe UI Assets Copied - Installation complete!"