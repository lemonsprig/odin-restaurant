console.log("this is the restaurant web page");

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("container");

  const restaurantName = document.createElement("h1");
  restaurantName.textContent = "The Half Baked Lemon";

  header.appendChild(restaurantName);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const liAbout = document.createElement("li");
  liAbout.textContent = "About";
  const liMenu = document.createElement("li");
  liMenu.textContent = "Menu";
  const liContact = document.createElement("li");
  liContact.textContent = "Contact";

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

const content = document.querySelector("#content");
content.appendChild(createHeader());
content.appendChild(createMain());
content.appendChild(createFooter());
console.log(content);
