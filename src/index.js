import { contentLoader, mainMenu } from "./modules/content.js";
import { menuMaker } from "./modules/menu.js";
import { aboutPageMaker } from "./modules/about.js";
const intro = document.querySelector("#content");

contentLoader();
const buttons = document.querySelectorAll("button");

function eventHandler(event) {
  const buttonId = event.target.id;
  switch (buttonId) {
    case "home":
      contentCleaner();
      contentLoader();
      break;
    case "menu":
      contentCleaner();
      menuMaker();
      break;
    case "about":
      contentCleaner();
      aboutPageMaker();
      break;
  }
}
function contentCleaner() {
  intro.innerHTML = "";
}

buttons.forEach((button) => button.addEventListener("click", eventHandler));
export { intro };
