import { readRegistrations } from './storage.js';

const confirmationMessage = document.querySelector('#confirmation-message');
const registrationSummary = document.querySelector('#registration-summary');
const params = new URLSearchParams(window.location.search);
const registrationId = params.get('id');

if (!registrationId) {
    const fallbackDetails = [
        ['Pet', params.get('petName')],
        ['Type', params.get('species')],
        ['Breed', params.get('breed')],
        ['Age', params.get('age')],
        ['Owner', params.get('ownerName')],
        ['Email', params.get('email')]
    ].filter(([, value]) => value);

    if (fallbackDetails.length === 0) {
        confirmationMessage.textContent = 'No registration details were provided. You can start a new pet profile below.';
    } else {
        confirmationMessage.textContent = `Thank you, ${params.get('ownerName') || 'pet owner'}! Your form was submitted.`;
        const details = document.createElement('dl');
        fallbackDetails.forEach(([label, value]) => {
            const term = document.createElement('dt');
            term.textContent = label;
            const description = document.createElement('dd');
            description.textContent = value;
            details.append(term, description);
        });
        registrationSummary.append(details);
    }
} else {
    try {
        const registration = readRegistrations().find((item) => item.id === registrationId);
        if (!registration) {
            confirmationMessage.textContent = 'This registration could not be found in this browser. You can start a new pet profile below.';
        } else {
            const petName = params.get('petName') || registration.petName;
            const species = params.get('species') || registration.species;
            confirmationMessage.textContent = `Thank you! ${petName} has been registered in this browser.`;

            const details = document.createElement('dl');
            for (const [label, value] of [
                ['Pet', petName],
                ['Type', species],
                ['Breed', registration.breed],
                ['Age', registration.age],
                ['Confirmation', registration.id]
            ]) {
                const term = document.createElement('dt');
                term.textContent = label;
                const description = document.createElement('dd');
                description.textContent = value;
                details.append(term, description);
            }
            registrationSummary.append(details);
        }
    } catch (error) {
        confirmationMessage.textContent = 'Your saved registration could not be read from this browser. Check browser storage settings.';
        console.error('Pet registration confirmation failed:', error);
    }
}
