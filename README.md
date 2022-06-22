# Rubik's Cube

Try it here  
https://virtual-cube.web.app/

This project features a Rubik's Cube controlled by keyboard. There are two main use-cases.  
1) Rubik's Cube tutorial. Currently, the most popular medium for learning to solve a Rubik's Cube is via youtube videos, which can be hard to navigate and follow along. My proposed solution is a cube animation that can be stepped through and is split into lessons.
2) A Rubik's Cube with scrambling functionality and a timer. 

## Tech stack decisions
- The project is primarily front-end based and uses WebGL for animating a cube in 3D
- Hosted on Firebase because it has a generous free plan. In the future, I may use other Firebase offerings such as Firestore and Auth  
- Use webpack to compile typescript and build the final distribution

## Limitations

No testing yet! Except for my personal usage of the app

## Development flow

Sometimes you need to reset the cache with ctrl + shift + r if you rebuild the bundle after serving the files.

Build
```
npm run build
```

Serve
```
firebase serve

// Another option
serve public
```

Serve to another device on network
```
firebase serve -o IP_ADDRESS
```

Deploy
```
firebase deploy
```
