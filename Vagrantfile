require 'yaml'
configs = YAML.load_file('./vagrant/config.yaml')

Vagrant.configure("2") do |config|
	config.vm.box = "hashicorp/bionic64"

	config.vm.provider "virtualbox" do |v|
      v.memory = 2048
      v.cpus = 6
    end

    config.vm.provider "hyperv" do |v|
        v.vmname = configs['hyperv']['vmname']
        v.cpus = configs['hyperv']['cpus']
        v.maxmemory = configs['hyperv']['maxmemory']
    end

	if Vagrant::Util::Platform.windows? then
		config.vm.synced_folder ".", "/var/www/slix-app/",
		    type: configs['hyperv']['share_folder']['type'],
		    disabled: configs['hyperv']['share_folder']['disabled']

		config.trigger.before :up do |trigger|
		     trigger.run = {
		     privileged: "true",
		     powershell_elevated_interactive: "true",
		     path: "./vagrant/hyper-v/create-nat.ps1",
		     args: [configs['hyperv']['network']['name'],
		        configs['hyperv']['network']['ip'],
		        configs['hyperv']['network']['mask'],
		        configs['hyperv']['vmname']]
		     }
		end
	else
		config.vm.synced_folder ".", "/var/www/slix-app/"
	end

	config.vm.network "private_network", ip: "10.0.0.2"
    config.vm.hostname = "slix-app.com"

	config.vm.provision "file", source: "~/.ssh/id_rsa.pub", destination: "~/.ssh/me.pub"
	config.vm.provision "shell", path: "./vagrant/ssh.sh"
	config.vm.provision "shell", path: "./vagrant/nodejs.sh"
	config.vm.provision "shell", path: "./vagrant/slix-app.sh"
	config.vm.provision "shell", path: "./vagrant/nginx/install.sh"
	config.vm.provision "shell", path: "./vagrant/nginx/add-config.sh"
	config.vm.provision "shell", path: "./vagrant/nginx/reload.sh"
end
