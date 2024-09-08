import { intro } from "/src/index.js";

function menuMaker() {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menuDiv");
  const item = document.createElement("div");
  item.classList.add("item");
  const itemTitle = document.createElement("h3");
  itemTitle.textContent = "Chicken";
  item.append(itemTitle);
  menuDiv.append(item);
  intro.append(menuDiv);
}

export { menuMaker };
