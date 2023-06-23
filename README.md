# CubingApp

I have only tested these steps on my Windows machine. I am not sure if it will work perfectly for others.

How to run locally:

## 1. Prerequisites

Must have go and npm installed

## 2. Install packages
```
# install in root directory
npm install

# install in ui directory
cd ui
npm install
```

## 3. Build ui

```
cd ui
npm run buildDev
```

## 4. Emulate

Run the firebase emulator for auth and hosting
```
npm run emulate
```

## 5. Run database

The database and server are only needed for some features.

Install postgres: https://www.postgresql.org/download/

(Optional) Install pgAdmin if you want a GUI for accessing postgres: https://www.pgadmin.org/download/

Create the tables by running the script in /server/db/create_tables.sql

## 6. Set up environment variables

a. Inside the /server directory, you should see a file called .env-template. Copy .env-template and name it .env-dev

b. Fill in the values for the environment variables

c. Put the Firebase config in firebase-config.json. This can be regenerated from the Firebase console if needed.

## 7. Run server

```
cd server/scripts
./run.sh dev
```