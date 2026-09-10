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
    let divider = document.createElement("hr");
    let content = document.createElement("div");
    let img = document.createElement("img");
    let info = document.createElement("div");
    let phone = document.createElement("p");
    let email = document.createElement("p");
    let website = document.createElement("a");

    name.textContent = member.name;
    address.textContent = member.address;
    divider.classList.add("divider");
    content.classList.add("card-content");
    info.classList.add("card-info");

    phone.textContent = member.phone;
    // Use website as email placeholder if no email field in JSON, or member.email if exists
    email.textContent = member.email || member.website.replace("https://", "").replace("www.", "");
    website.textContent = member.website;
    website.setAttribute("href", member.website);
    website.setAttribute("target", "_blank");

    if (member.membership === 3) {
      card.classList.add("gold");
    } else if (member.membership === 2) {
      card.classList.add("silver");
    }

    img.setAttribute("src", `images/${member.image}`);
    img.setAttribute("alt", `Logo of ${member.name}`);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "300");
    img.setAttribute("height", "300");

    info.appendChild(phone);
    info.appendChild(email);
    info.appendChild(website);

    content.appendChild(img);
    content.appendChild(info);

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(divider);
    card.appendChild(content);

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
