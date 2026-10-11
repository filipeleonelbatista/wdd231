const petList = document.querySelector('#pet-list');
const statusMessage = document.querySelector('#catalog-status');
const searchInput = document.querySelector('#pet-search');
const speciesFilter = document.querySelector('#species-filter');
const categoryButtons = document.querySelectorAll('.filter-button');
const petDialog = document.querySelector('#pet-dialog');
const dialogContent = document.querySelector('#pet-dialog-content');
const dialogClose = petDialog.querySelector('.dialog-close');

let pets = [];
let selectedCategory = 'all';

function addTextElement(parent, tagName, text, className) {
    const element = document.createElement(tagName);
    element.textContent = text;
    if (className) {
        element.className = className;
    }
    parent.append(element);
    return element;
}

function showPetDetails(pet) {
    dialogContent.replaceChildren();
    addTextElement(dialogContent, 'p', pet.category, 'pet-badge');
    const title = addTextElement(dialogContent, 'h2', pet.name, 'dialog-title');
    title.id = 'dialog-title';

    const image = document.createElement('img');
    image.src = pet.image;
    image.alt = pet.imageAlt;
    image.width = 320;
    image.height = 220;
    image.className = 'dialog-pet-image';
    dialogContent.append(image);

    addTextElement(dialogContent, 'p', pet.description);
    const details = document.createElement('dl');
    for (const [label, value] of [
        ['Type', pet.species],
        ['Breed', pet.breed],
        ['Age', pet.age],
        ['Sex', pet.sex],
        ['Location', pet.location]
    ]) {
        addTextElement(details, 'dt', label);
        addTextElement(details, 'dd', value);
    }
    dialogContent.append(details);
    petDialog.showModal();
}

function renderPets() {
    const searchTerm = searchInput.value.trim().toLocaleLowerCase();
    const selectedSpecies = speciesFilter.value;
    const matches = pets.filter((pet) => {
        const matchesSearch = `${pet.name} ${pet.breed} ${pet.location}`
            .toLocaleLowerCase()
            .includes(searchTerm);
        return matchesSearch
            && (selectedSpecies === 'all' || pet.species === selectedSpecies)
            && (selectedCategory === 'all' || pet.category === selectedCategory);
    });

    petList.replaceChildren();
    if (matches.length === 0) {
        statusMessage.textContent = 'No pets match those filters. Try another search.';
        return;
    }

    statusMessage.textContent = `${matches.length} ${matches.length === 1 ? 'pet' : 'pets'} found.`;
    const fragment = document.createDocumentFragment();
    matches.forEach((pet) => {
        const card = document.createElement('article');
        card.className = 'pet-card';

        const image = document.createElement('img');
        image.src = pet.image;
        image.alt = pet.imageAlt;
        image.width = 320;
        image.height = 220;
        image.loading = 'lazy';
        card.append(image);

        const content = document.createElement('div');
        content.className = 'pet-card-content';
        addTextElement(content, 'span', pet.category, 'pet-badge');
        addTextElement(content, 'h3', pet.name);
        addTextElement(content, 'p', `${pet.species} · ${pet.breed}`);
        addTextElement(content, 'p', `${pet.age} · ${pet.location}`);
        addTextElement(content, 'p', pet.description, 'pet-description');

        const detailsButton = document.createElement('button');
        detailsButton.type = 'button';
        detailsButton.className = 'details-button';
        detailsButton.textContent = 'View details';
        detailsButton.addEventListener('click', () => showPetDetails(pet));
        content.append(detailsButton);

        card.append(content);
        fragment.append(card);
    });
    petList.append(fragment);
}

async function loadPets() {
    try {
        const response = await fetch(new URL('../data/pets.json', import.meta.url));
        if (!response.ok) {
            throw new Error(`Could not load pet profiles (HTTP ${response.status}).`);
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
            throw new Error('Pet data must be a JSON array.');
        }
        pets = data;
        renderPets();
    } catch (error) {
        statusMessage.textContent = 'Pet profiles could not be loaded. Please try again later.';
        console.error('Catalog loading failed:', error);
    }
}

searchInput.addEventListener('input', renderPets);
speciesFilter.addEventListener('change', renderPets);
categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
        selectedCategory = button.dataset.category;
        categoryButtons.forEach((categoryButton) => {
            categoryButton.setAttribute(
                'aria-pressed',
                String(categoryButton === button)
            );
        });
        renderPets();
    });
});
dialogClose.addEventListener('click', () => petDialog.close());
petDialog.addEventListener('click', (event) => {
    if (event.target === petDialog) {
        petDialog.close();
    }
});

loadPets();
