if [ -f /usr/bin/java ]; then
	echo "Java is already installed"
	java --version
else
	echo "Installing Java"
	sudo apt-get install -y openjdk-11-jre-headless
fi
