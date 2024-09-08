import manPicture from "/src/man.jpg";
import { intro } from "/src/index.js";
const mainMenu = document.createElement("div");

function contentLoader() {
  const headText = document.createElement("h1");
  const introText = document.createElement("h2");
  const para = document.createElement("p");

  const headLine = "Welcome To Pelago";
  const introH2 = "Now serving in Bronx";
  const paragraph =
    "Indulge yourselve in the vast range of delicacies offered by one of the most celebrated barbeques of Chicago.";

  headText.textContent = headLine;
  introText.textContent = introH2;
  para.textContent = paragraph;
  const pic = document.createElement("img");
  pic.src = manPicture;

  mainMenu.append(headText, introText, para, pic);
  intro.append(mainMenu);
}
export { contentLoader, mainMenu };
