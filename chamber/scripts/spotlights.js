const spotUrl = "data/members.json";
const spotContainer = document.querySelector("#spotlights");

async function getSpotlights() {
  try {
    const response = await fetch(spotUrl);
    const members = await response.json();
    const filtered = members.filter(
      (m) => m.membership === 2 || m.membership === 3,
    );
    const shuffled = filtered.sort(() => 0.5 - Math.random());
    const count = Math.random() < 0.5 ? 2 : 3;
    const selected = shuffled.slice(0, count);
    displaySpotlights(selected);
  } catch (error) {
    console.log(error);
  }
}

function displaySpotlights(members) {
  members.forEach((member) => {
    const card = document.createElement("section");
    const name = document.createElement("h3");
    const logo = document.createElement("img");
    const phone = document.createElement("p");
    const address = document.createElement("p");
    const website = document.createElement("a");
    const level = document.createElement("p");

    name.textContent = member.name;
    logo.setAttribute("src", `images/${member.image}`);
    logo.setAttribute("alt", `Logo of ${member.name}`);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "150");
    logo.setAttribute("height", "150");

    phone.textContent = `Phone: ${member.phone}`;
    address.textContent = member.address;
    website.textContent = member.website;
    website.setAttribute("href", member.website);
    website.setAttribute("target", "_blank");
    level.textContent =
      member.membership === 3 ? "Gold Member" : "Silver Member";

    card.appendChild(name);
    card.appendChild(logo);
    card.appendChild(phone);
    card.appendChild(address);
    card.appendChild(website);
    card.appendChild(level);

    spotContainer.appendChild(card);
  });
}

getSpotlights();
