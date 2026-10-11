import { saveRegistration } from './storage.js';

const form = document.querySelector('#pet-registration');
const statusMessage = document.querySelector('#registration-status');

form.addEventListener('submit', (event) => {
    statusMessage.textContent = '';

    const formData = new FormData(form);
    const registration = {
        id: globalThis.crypto.randomUUID(),
        petName: formData.get('petName').trim(),
        species: formData.get('species'),
        breed: formData.get('breed').trim(),
        age: formData.get('age').trim(),
        ownerName: formData.get('ownerName').trim(),
        email: formData.get('email').trim(),
        notes: formData.get('notes').trim(),
        submittedAt: new Date().toISOString()
    };

    try {
        saveRegistration(registration);
        form.elements.namedItem('id').value = registration.id;
        form.elements.namedItem('breed').disabled = true;
        form.elements.namedItem('age').disabled = true;
        form.elements.namedItem('ownerName').disabled = true;
        form.elements.namedItem('email').disabled = true;
        form.elements.namedItem('notes').disabled = true;
    } catch (error) {
        event.preventDefault();
        statusMessage.textContent = 'Your profile could not be saved in this browser. Check browser storage settings and try again.';
        console.error('Pet registration could not be saved:', error);
    }
});
