import manPicture from "./man.jpg";
import { contentLoader } from "./content.js";

const { headLine, introH2, paragraph } = contentLoader();
const buttons = document.querySelectorAll("button");

function eventHandler(event) {
  const buttonId = event.target.id;
  switch (buttonId) {
    case "home":
      console.log("Home");
      break;
    case "menu":
      console.log("menu");
      break;
    case "about":
      console.log("about");

      break;
  }
}

buttons.forEach((button) => button.addEventListener("click", eventHandler));

const intro = document.querySelector("#content");
const headText = document.createElement("h1");
const introText = document.createElement("h2");
const para = document.createElement("p");

headText.textContent = headLine;
introText.textContent = introH2;
para.textContent = paragraph;

const pic = document.createElement("img");
pic.src = manPicture;

intro.append(headText, introText, para, pic);
