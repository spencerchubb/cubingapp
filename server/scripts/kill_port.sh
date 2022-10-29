# check if port 3000 is open
# if it is, then kill it
if [ `sudo lsof -t -i:$1` ]; then
    sudo kill `sudo lsof -t -i:$1`
fi