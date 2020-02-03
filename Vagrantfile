# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"

  config.vm.synced_folder ".", "/var/www/slix-app/"
  config.vm.network "private_network", ip: "10.10.0.10"

  #config.vm.provision "file", source: "~/.ssh/id_rsa.pub", destination: "~/.ssh/me.pub"
  #config.vm.provision "shell", path: "./vagrant/ssh.sh"
  #config.vm.provision "shell", path: "./vagrant/nodejs.sh"
  config.vm.provision "shell", path: "./vagrant/slix-app.sh"
end
