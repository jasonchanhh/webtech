"use strict";

var spade = {take: true, carry: false, description: "There is a spade here." };
var sand = {dig: true, description: "There is sand here." };
var tree = {go: true, spade: spade, description : "You are near a tree."};
var beach = {go: true, sand: sand, description : "You are on a beach."};
tree.south = beach;
beach.north = tree;

var here = {tree: tree};

console.log("You are stranded on a tiny desert island with a single palm tree.");
go("tree");

function go(direction) {
  if (here[direction] && here[direction]["go"]) {
    var there = here[direction];
    for (var item in here) {
      if (here[item]["carry"]) {
        there[item] = here[item];
        here[item] = undefined;
      }
    }
    console.log(there.description);
    for (var item in there) {
      if (there[item]["take"] || there[item]["dig"]) {
        console.log(there[item].description);
      }
    }
  }
  else console.log("You can't go there.");
}

function take(item) {
  if (here[item] && here[item]["take"]) {
    here[item].carry = true;
    here[item].take = false;
    console.log("You are carrying a spade.");
  }
  else console.log("You can't take that.");
}

function dig(item) {
  if (here[item] && here[item]["dig"]) {
    if (here["spade"]) {
      console.log("You find your return ticket and go home.");
      return true;
    }
    else console.log("You can't dig that.");
  }
}

go("south");
dig("sand");
go("north");
take("spade");
go("south");
dig("sand");
