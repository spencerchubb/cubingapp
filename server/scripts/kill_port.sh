# iterate through pids associated with the port and kill them
# example usage: ./kill_port.sh 3000
for pid in `sudo lsof -t -i:$1`; do
    sudo kill $pid
done