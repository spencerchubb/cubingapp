## Dependencies
install git  
sudo yum update  
sudo yum install git  
git version  

install go  
sudo yum update  
sudo yum install go  
go version  

## Upgrading server to https
Generate certificate signing request
```
$ openssl req -new -newkey rsa:2048 -nodes -keyout localhost.key -out localhost.csr
```

Generate localhost.crt
```
$ openssl x509 -req -days 365 -in localhost.csr -signkey localhost.key -out localhost.crt
```