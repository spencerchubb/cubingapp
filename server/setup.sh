sudo apt install apache2 php libapache2-mod-php php-sqlite3

# Edit apache config
cd /etc/apache2/sites-available/
sudo cp 000-default.conf gci.conf
sudo vim gci.conf

sudo cp -r . /var/www/html

# To activate
sudo a2ensite gci.conf
sudo service apache2 reload
