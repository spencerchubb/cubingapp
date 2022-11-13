// This file generates the html for learn.html
// Usage: node gen.ts

const fs = require("fs");

const lessons = [
    {
        header: "Centers",
        body: `
        In this tutorial, we will refer to different types of pieces. 
        One of these types is the centers, which are highlighted in the animation.
        `,
    },
    {
        header: "Corners",
        body: `
        Now in the animation, the corners and the centers are highlighted.
        `,
    },
    {
        header: "Edges",
        body: `
        The edges and centers are highlighted. 
        This is the last category of piece that you need to know for the tutorial.  
        `,
    },
    {
        header: "About the cross",
        body: `
        Once you solve the cross, it should look like the animation.
        You should be able to see how it forms a white cross, hence the name of the step.
        Try the arrow buttons so you can see how it looks from all angles. 
        `,
    },
    {
        header: "Case 1",
        body: `
        We want to move the green-white pieces from the bottom to its solved position. 
        First you line up the green, then you line up the white.
        `,
    },
    {
        header: "Case 2",
        body: `
        Now the white-green piece is in the middle layer, on the right.
        First we move it to the bottom, then you'll notice that the white-red was disturbed.
        We move the white-green out of the way, then fix the white-red.
        `,
    },
    {
        header: "Case 3",
        body: `
        The white-green is in its correct position, but flipped.
        We can move the front layer, and this brings us to a case we have seen before.
        `,
    },
    {
        header: "Case 4",
        body: `
        The white-green is on the bottom, but flipped incorrectly. 
        White is matched with green, but we want green with green.
        We can move hte front layer, and this brings us to a case we have seen before.
        `,
    },
    {
        header: "Prepare corner to insert",
        body: `
        Since the cross is solved, we will holdit on the bottom from now on.
        The white-orange-green corner is in the top left, and needs to go to the bottom right.
        We can move the top layer to put it above its solved position.
        `,
    },
    {
        header: "Inserting a corner example 1",
        body: `
        The white-orange-green is above where it needs to go. 
        We only need a 4-move algorithm to insert it.
        `,
    },
    {
        header: "Inserting a corner example 2",
        body: `
        We will use the same 4-move algorithm, but we have to repeat it multiple times.
        `,
    },
    {
        header: "Inserting a corner example 3",
        body: `
        We will use the same 4-move algorithm, but we have to repeat it multiple times.
        `,
    },
    {
        header: "Prepare edge to insert",
        body: `
        We are interested in the red-green. 
        Move the top layer so that the green matches the center.
        `,
    },
    {
        header: "Insert edge to the left",
        body: `
        Notice the red-green is ready because the green matches the center. 
        To insert it to the left, we use this algorithm.
        `,
    },
    {
        header: "Insert edge to the right",
        body: `
        We want to insert the orange-green to the right. 
        This is a mirror of the "left insert" algorithm.
        `,
    },
    {
        header: "Bar case",
        body: `
        This algorithm turns the Bar into a cross.
        `,
    },
    {
        header: "L case",
        body: `
        This algorithm turns the L into a cross.
        `,
    },
    {
        header: "Dot case",
        body: `
        To turn the dot into a cross, we combine the Bar algorithm and the L algorithm.
        `,
    },
    {
        header: "Sune algorithm",
        body: `
        This algorithm is used to get the yellow corners on top.
        `,
    },
    {
        header: "Sune example 1",
        body: `
        In this case, one yellow corner is on top and another is facing the right. Perform Sune twice to solve.
        `,
    },
    {
        header: "Sune example 2",
        body: `
        This case uses Sune 3 times.
        If you get a case that isn't covered here, just use trial-and-error.
        Try doing Sune to give you another case, and keep doing that until you get a case that you recognize.
        `,
    },
    {
        header: "Headlights",
        body: `
        Notice the two red corners form a "headlight" pattern.
        Use this algorithm to solve the corners when you see headlights.
        `,
    },
    {
        header: "No headlights",
        body: `
        When there are no headlights, you can perform the headlights algorithm to produce a headlights case.
        `,
    },
    {
        header: "Bar case",
        body: `
        In this case, there is a bar on one side with all the colors matching.
        `,
    },
    {
        header: "No bar case",
        body: `
        If there is no bar, you can perform the bar algorithm to produce a bar case.
        `,
    },
];

let output = "";

lessons.forEach((lesson, i) => {
    if (i !== 0) {
        output += `<div class="bg-gray-300 w-full max-w-lg h-0.5 flex-shrink-0 mt-6"></div>`;
    }
    output += `
    <div id="scene${i}" class="glDiv mt-6"></div>
    <div class="row mt-4">
        <button id="leftButton${i}" class="btn-primary">&lt;</button>
        <p id="moveCounter${i}" class="mx-4 text-2xl text-white"></p>
        <button id="rightButton${i}" class="btn-primary">&gt;</button>
    </div>
    <p class="mt-4 text-white text-lg font-bold">${lesson.header}</p>
    <p class="mt-2 text-white text-left px-6 max-w-lg break-words">${lesson.body}</p>
    `;
});

fs.writeFile("lessons.html", output, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("lessons.html was saved!");
});

let contents = "";

lessons.forEach((lesson, i) => {
    contents += `
    <a href="#scene${i}" class="text-black hover:underline mt-2">${lesson.header}</a>
    `;
});

fs.writeFile("contents.html", contents, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("contents.html was saved!");
});