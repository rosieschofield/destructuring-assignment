"use strict";
exports.__esModule = true;
var poemLines = [
  "roses are red",
  "violets are blue",
  "poems are fun",
  "coding is too!",
];
var person = { firstName: "Richard", lastName: "Ng", location: "UK" };
// const firstLine = poemLines[0];
// const secondLine = poemLines[1];
var firstLine = poemLines[0],
  secondLine = poemLines[1];
// const firstName = person.firstName;
// const lastName = person.lastName;
var firstName = person.firstName,
  lastName = person.lastName;
console.log(firstLine);
console.log(secondLine);
console.log("A poem by " + firstName + " " + lastName);
