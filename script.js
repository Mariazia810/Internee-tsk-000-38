const form = document.getElementById('reservation-form');
const messageElement = document.getElementById('reservation-message');


form.addEventListener('submit', (e) => {
  
  e.preventDefault();


  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

 
  setTimeout(() => {
    
    messageElement.style.display = 'block';
    messageElement.textContent = `Reservation successful! Thank you, ${name}. We'll see you on ${date} at ${time}.`;
  }, 1000); 
});