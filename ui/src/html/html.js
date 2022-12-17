// Run this script to generate html
// For example: node html.js

const fs = require("fs");
const learn = require("./learn.js");
const learn2x2 = require("./learn2x2.js");
const learn3x3 = require("./learn3x3.js");
const learnF2L = require("./learnF2L.js")
const learnNotation = require("./learnNotation.js");

function genHtml(html) {
    return `<!DOCTYPE html>\n<html>\n${htmlToStr(html, 0)}\n</html>`;
}

function htmlToStr(html, depth) {
    if (html === undefined || html === null) {
        return "";
    } else if (typeof html === "string") {
        return "\t".repeat(depth) + html.trim();
    } else if (html instanceof Array) {
        return html.map(child => `${objToStr(child, depth)}`).join('\n');
    }
    return objToStr(html, depth);
}

function objToStr(obj, depth) {
    let indent = "\t".repeat(depth);
    if (obj === undefined || obj === null) {
        return "";
    } else if (typeof obj === "string") {
        return `${indent}${obj}`;
    }
    let children = obj.children
        ? `\n${htmlToStr(obj.children, depth + 1)}\n${indent}`
        : "";
    let attributes = Object.keys(obj)
        .filter(key => key !== "tag" && key !== "children")
        .map(key => `${key}="${obj[key]}"`)
        .join(' ');
    if (attributes) {
        attributes = " " + attributes;
    }
    return `${indent}<${obj.tag}${attributes}>${children}</${obj.tag}>`;
}

const outDir = "../../public";
fs.writeFileSync(`${outDir}/learn.html`, genHtml(learn));
fs.writeFileSync(`${outDir}/learn-3x3.html`, genHtml(learn3x3));
fs.writeFileSync(`${outDir}/learn-2x2.html`, genHtml(learn2x2));
fs.writeFileSync(`${outDir}/learn-f2l.html`, genHtml(learnF2L));
fs.writeFileSync(`${outDir}/learn-notation.html`, genHtml(learnNotation));