import { intro } from "../index.js";

function aboutPageMaker() {
  const aboutDiv = document.createElement("div");
  const heading = document.createElement("h1");
  heading.textContent = "What is Pelago ?";
  const paragraph =
    "We take pride in serving the most authentic Chicago Chicken wings you can have here in NYC ";

  aboutDiv.append(heading, paragraph);
  intro.append(aboutDiv);
}
export { aboutPageMaker };
