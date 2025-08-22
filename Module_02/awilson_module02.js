/*
  Module 02 – JavaScript Program
  Author: Albert Wilson Jr.
  Date: August 22, 2025

  This program:
    - Prompts the user for their first name
    - Creates a constant piValue = 3.1415926
    - Prompts for the user’s favorite number and stores it in myFavNum
    - Calculates the area of a circle using A = π r^2
    - Stores the result in myArea
    - Displays all variables with descriptive text on the webpage
*/

// 1) Ask user for first name and store in Fname
let Fname = prompt("What is your first name?");

// 2) Create a constant for Pi (7 significant digits)
const piValue = 3.1415926;
const myPi = piValue; // alias matches assignment wording

// 3) Ask for favorite number and store in myFavNum
let myFavNum = Number(prompt("Enter your favorite number:"));

// 4) Calculate the area of a circle (A = π r^2) and store in myArea
let myArea = myPi * (myFavNum * myFavNum);

// 5) Display the contents of each variable with descriptive text
document.write("The variable Fname stores your first name: " + Fname + ".<br>");
document.write("The constant piValue stores the value of Pi: " + piValue + ".<br>");
document.write("The variable myFavNum stores your favorite number: " + myFavNum + ".<br>");
document.write("The variable myArea stores the area of a circle with radius " + myFavNum + ": " + myArea.toFixed(6) + ".");
