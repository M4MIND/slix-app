Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"

  config.vm.synced_folder ".", "/var/www/slix-app/"
  config.vm.network "private_network", ip: "10.10.0.10"
  config.vm.hostname = "slix-app.com"

  config.vm.provision "file", source: "~/.ssh/id_rsa.pub", destination: "~/.ssh/me.pub"
  config.vm.provision "shell", path: "./vagrant/ssh.sh"
  config.vm.provision "shell", path: "./vagrant/nodejs.sh"
  config.vm.provision "shell", path: "./vagrant/slix-app.sh"
  config.vm.provision "shell", path: "./vagrant/nginx/install.sh"
  config.vm.provision "shell", path: "./vagrant/nginx/add-config.sh"
  config.vm.provision "shell", path: "./vagrant/nginx/reload.sh"
end
