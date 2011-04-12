ssh_user    = "ubuntu@50.16.218.116"
remote_root = "/srv/www/youareawake.com"
ssh_key     = "/home/travis/.ec2/gsg-keypair.pem"
dropbox_dir = ""

desc "Runs preview"
task :preview do
  system "staticmatic preview ."
end

desc "Build the site"
task :build => "styles:clear" do
  puts "** building site **"
  system "staticmatic build ."
end

desc "Clear and generate new styles, build, and deploy"
task :deploy => :build do
  puts "** deploying site **"
  system("rsync -avz --rsh \"ssh -i #{ssh_key}\" --delete site/ #{ssh_user}:#{remote_root}")
end

namespace :styles do
  desc "Clear styles"
  task :clear do
    puts "** clearing styles **"
    system "rm -Rfv site/stylesheets/*"
  end

  desc "Regenerate styles"
  task :generate => :clear do
    puts "** generating styles" 
    system "compass"
  end
end
