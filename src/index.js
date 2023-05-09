import contentAbout from "./about";
import contentMenu from "./menu";
import contentContact from "./contact";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("container");

  const restaurantName = document.createElement("h1");
  restaurantName.textContent = "The Half Baked Sprout";

  header.appendChild(restaurantName);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  const liAbout = document.createElement("li");
  const btnAbout = document.createElement("button");
  btnAbout.textContent = "About";
  btnAbout.value = "about";
  liAbout.appendChild(btnAbout);
  btnAbout.addEventListener("click", handleNavigation);

  const liMenu = document.createElement("li");
  const btnMenu = document.createElement("button");
  btnMenu.textContent = "Menu";
  btnMenu.value = "menu";
  liMenu.appendChild(btnMenu);
  btnMenu.addEventListener("click", handleNavigation);

  const liContact = document.createElement("li");
  const btnContact = document.createElement("button");
  btnContact.textContent = "Contact";
  btnContact.value = "contact";
  liContact.appendChild(btnContact);
  btnContact.addEventListener("click", handleNavigation);

  ul.appendChild(liAbout);
  ul.appendChild(liMenu);
  ul.appendChild(liContact);

  nav.appendChild(ul);

  return nav;
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("container");
  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("container");

  const p = document.createElement("p");
  p.textContent = "Copyright Ian Selby 2023";
  footer.appendChild(p);
  return footer;
}

function handleNavigation(e) {
  console.log(e);
  switch (e.target.value) {
    case "about":
      contentAbout();
      break;
    case "menu":
      contentMenu();
      break;
    case "contact":
      contentContact();
      break;
  }
}

const content = document.querySelector("#content");
content.appendChild(createHeader());
content.appendChild(createMain());
content.appendChild(contentAbout());
content.appendChild(createFooter());
console.log(content);
