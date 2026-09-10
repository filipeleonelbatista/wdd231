const url = "data/members.json";
const cards = document.querySelector("#members");

const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

async function getMembers() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data);
  } catch (error) {
    console.error(error);
  }
}

const displayMembers = (members) => {
  members.forEach((member) => {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("a");
    let img = document.createElement("img");
    let level = document.createElement("p");

    name.textContent = member.name;
    address.textContent = member.address;
    phone.textContent = member.phone;
    website.textContent = "Visit Website";
    website.setAttribute("href", member.website);
    website.setAttribute("target", "_blank");

    if (member.membership === 3) {
      card.classList.add("gold");
    } else if (member.membership === 2) {
      card.classList.add("silver");
    }

    level.textContent = `Membership: ${member.membership}`;

    img.setAttribute("src", `images/${member.image}`);
    img.setAttribute("alt", `Logo of ${member.name}`);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "300");
    img.setAttribute("height", "200");

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(level);

    cards.appendChild(card);
  });
};

getMembers();

gridBtn.addEventListener("click", () => {
  cards.classList.add("grid");
  cards.classList.remove("list");
});

listBtn.addEventListener("click", () => {
  cards.classList.add("list");
  cards.classList.remove("grid");
});
