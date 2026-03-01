This script runs in a Lambda function on AWS.

The AWS configuration is as follows:
- Parameter Store:
  - `cubingapp-ssh-private-key`: Store the SSH private key for connecting to the VPS.
- Lambda
  - Name: `import-wca-db`
  - Runtime: Python 3.14
  - Layer: `import-wca-db-layer` (contains pandas and paramiko packages)
  - Timeout: 10 minutes
  - Memory: 8192 MB
  - Ephemeral storage: 4096 MB
  - Environment variables:
    - `IP`: The IP address of the VPS.
    - `USER`: The username for connecting to the VPS.

To create the layer:
```bash
mkdir -p layer/python/lib/python3.13/site-packages
pip install --target ./layer/python/lib/python3.13/site-packages --platform manylinux2014_x86_64 --only-binary=:all: paramiko pandas
cd ./layer && zip -r layer.zip python
```
