sudo apt install apache2 php libapache2-mod-php php-sqlite3

# Edit apache config
cd /etc/apache2/sites-available/
sudo cp 000-default.conf gci.conf
sudo vim gci.conf

sudo cp index.php /var/www/html/index.php

# Set up symlink from here to var/www/html
sudo cp -r . /var/www/html
sudo cp wca.db /var/www/html/wca.db
sudo cp calculate-sum-of-ranks.php /var/www/html/calculate-sum-of-ranks.php

sudo cp -r . /var/www/html

# To activate
sudo a2ensite gci.conf
sudo service apache2 reload

# Edit php config
cd /etc/php/8.1/cli
sudo vim php.ini