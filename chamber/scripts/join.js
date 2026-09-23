const timestamp = document.querySelector('#timestamp');
if (timestamp) {
  timestamp.value = new Date().toISOString();
}

const npModal = document.querySelector('#np-modal');
const bronzeModal = document.querySelector('#bronze-modal');
const silverModal = document.querySelector('#silver-modal');
const goldModal = document.querySelector('#gold-modal');

document.querySelector('#np-button').addEventListener('click', () => {
  npModal.showModal();
});
document.querySelector('#bronze-button').addEventListener('click', () => {
  bronzeModal.showModal();
});
document.querySelector('#silver-button').addEventListener('click', () => {
  silverModal.showModal();
});
document.querySelector('#gold-button').addEventListener('click', () => {
  goldModal.showModal();
});

document.querySelector('#close-np').addEventListener('click', () => {
  npModal.close();
});
document.querySelector('#close-bronze').addEventListener('click', () => {
  bronzeModal.close();
});
document.querySelector('#close-silver').addEventListener('click', () => {
  silverModal.close();
});
document.querySelector('#close-gold').addEventListener('click', () => {
  goldModal.close();
});

npModal.addEventListener('click', (e) => {
  if (e.target === npModal) npModal.close();
});
bronzeModal.addEventListener('click', (e) => {
  if (e.target === bronzeModal) bronzeModal.close();
});
silverModal.addEventListener('click', (e) => {
  if (e.target === silverModal) silverModal.close();
});
goldModal.addEventListener('click', (e) => {
  if (e.target === goldModal) goldModal.close();
});
