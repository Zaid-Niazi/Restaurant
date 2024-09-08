import manPicture from "./man.jpg";
import { contentLoader } from "./content.js";

const { headLine, introH2, paragraph } = contentLoader();

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
