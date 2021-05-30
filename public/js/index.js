const weatherForm = document.querySelector('form');
const locationMsg = document.querySelector('#locationMsg');
const forecastMsg = document.querySelector('#forecastMsg');

weatherForm.addEventListener('submit', e => {
  e.preventDefault();
  const address = document.querySelector('#address').value;
  locationMsg.textContent = 'Loading...';
  fetch(`http://localhost:3000/weather?address=${address}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.error) throw new Error('Your city not found try again');
      locationMsg.textContent = data.location;
      forecastMsg.textContent = data.forecast;
    })
    .catch(err => {
      locationMsg.textContent = `Vanya's Error: ${err.message}`;
      forecastMsg.textContent = '';
    });
  e.target.reset();
});
