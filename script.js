// your JavaScript file
//const container = document.querySelector("#container");

//const content = document.createElement("div");
//content.classList.add("content");
//content.textContent = "This is the glorious text-content!";

//container.appendChild(content);

// Reference to the container div
const container = document.querySelector("#container");

// First div with class 'content'
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

// Add a <p> with red text
const redText = document.createElement("p");
redText.style.color = "red";
redText.textContent = "Hey I'm red!";
container.appendChild(redText);

// Add an <h3> with blue text
const blueText = document.createElement("h3");
blueText.style.color = "blue";
blueText.textContent = "I'm a blue h3!";
container.appendChild(blueText);

// Add a <div> with a black border and pink background
const blackPinkDiv = document.createElement("div");
blackPinkDiv.style.border = "2px solid black";
blackPinkDiv.style.backgroundColor = "pink";

// Inside this div, add an <h1> and a <p>
const innerH1 = document.createElement("h1");
innerH1.textContent = "I'm in a div";
blackPinkDiv.appendChild(innerH1);

const innerP = document.createElement("p");
innerP.textContent = "ME TOO!";
blackPinkDiv.appendChild(innerP);

// Append the blackPinkDiv to container
container.appendChild(blackPinkDiv);