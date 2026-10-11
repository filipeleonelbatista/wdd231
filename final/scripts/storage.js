export const REGISTRATIONS_KEY = 'registerpet.registrations.v1';

export function readRegistrations() {
    const stored = localStorage.getItem(REGISTRATIONS_KEY);
    if (stored === null) {
        return [];
    }

    const registrations = JSON.parse(stored);
    if (!Array.isArray(registrations)) {
        throw new Error('Saved pet registrations are not in the expected format.');
    }
    return registrations;
}

export function saveRegistration(registration) {
    const registrations = readRegistrations();
    registrations.push(registration);
    localStorage.setItem(REGISTRATIONS_KEY, JSON.stringify(registrations));
}
