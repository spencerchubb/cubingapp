# Rubik's Cube

This project features a Rubik's Cube controlled by keyboard. There are two main use-cases.  
1) Rubik's Cube tutorial. Currently, the most popular medium for learning to solve a Rubik's Cube is via youtube videos, which can be hard to navigate and follow along. My proposed solution is a cube animation that makes learning interactive.
2) A Rubik's Cube with scrambling functionality and a timer. 

## Scripts

Deploy
```
firebase deploy
firebase deploy --only hosting
firebase deploy --only functions
```

Kill port (must run in powershell)
```
netstat -ano | findstr :PORT
taskkill /pid PID /f
```

## Directories

- admin - Scripts for admins (such as myself) to run. Currently, the the scripts are mainly meant for analytics.
- functions - Firebase Cloud Functions
- public - HTML, CSS, Javascript, and images for frontend
- scripts - The js and ts code before being compiled for the frontend
- test - Integration tests