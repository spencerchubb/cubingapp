To setup a cron job for database backups, follow these steps.

1. Run `crontab -e` to edit the crontab file.

2. Add the following to the crontab file.
```bash
# Backup the CubingApp database every day.
0 0 * * * cd $HOME/cubingapp/server/db && ./backup.sh
```
