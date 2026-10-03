import { places } from "../data/places.mjs";

const grid = document.querySelector(".discover-grid");
const msg = document.querySelector("#visit-message");

function displayPlaces(list) {
  list.forEach((place) => {
    const card = document.createElement("section");
    const title = document.createElement("h2");
    const fig = document.createElement("figure");
    const img = document.createElement("img");
    const addr = document.createElement("address");
    const desc = document.createElement("p");
    const btn = document.createElement("button");

    title.textContent = place.name;
    img.setAttribute("src", `images/${place.image}`);
    img.setAttribute("alt", place.name);
    img.setAttribute("width", "300");
    img.setAttribute("height", "200");
    img.setAttribute("loading", "lazy");
    addr.textContent = place.address;
    desc.textContent = place.description;
    btn.textContent = "Learn More";

    fig.appendChild(img);
    card.appendChild(title);
    card.appendChild(fig);
    card.appendChild(addr);
    card.appendChild(desc);
    card.appendChild(btn);
    grid.appendChild(card);
  });
}

displayPlaces(places);

const now = Date.now();
const last = Number(localStorage.getItem("last-visit"));
if (!last) {
  msg.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - last) / 86400000);
  if (days < 1) {
    msg.textContent = "Back so soon! Awesome!";
  } else if (days === 1) {
    msg.textContent = "You last visited 1 day ago.";
  } else {
    msg.textContent = `You last visited ${days} days ago.`;
  }
}
localStorage.setItem("last-visit", String(now));
