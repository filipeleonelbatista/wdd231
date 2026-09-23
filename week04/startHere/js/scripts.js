const getString = window.location.search;
const myInfo = new URLSearchParams(getString);

document.querySelector('#results').innerHTML = `
<p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Phone: ${myInfo.get('phone')}</p>
<p>Email: ${myInfo.get('email')}</p>
<p>Ordinance: ${myInfo.get('ordinance')}</p>
<p>Date: ${myInfo.get('date')}</p>
<p>Location: ${myInfo.get('location')}</p>`;
