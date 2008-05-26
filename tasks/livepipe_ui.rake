namespace :livepipe_ui do
  namespace :update do
    desc "Copies the LivePipe UI Assets to public/javascripts"
    task :javascripts do
      puts "Copying files..."
      project_dir = RAILS_ROOT + '/public/javascripts/'
      scripts = Dir[File.join(File.dirname(__FILE__),'..') + '/src/*.js']
      scripts.push(File.join(File.dirname(__FILE__),'..') + '/lib/resizable.js')
      FileUtils.cp(scripts, project_dir)
      puts "files copied successfully."
    end
  end
  
  namespace :install do
    desc "Copies the LivePipe UI Assets to public/javascripts"
    task :javascripts do
      Rake::Task['livepipe_ui:update:javascripts'].invoke
    end
  end
end