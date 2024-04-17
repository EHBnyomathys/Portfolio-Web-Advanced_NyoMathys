document.getElementById('contactForm').addEventListener('submit', function(event) {
  var naamVeld = document.getElementById('naam');
  var emailVeld = document.getElementById('email');
  var berichtVeld = document.getElementById('bericht');
  var naamFout = document.getElementById('naamFout');
  var emailFout = document.getElementById('emailFout');
  var berichtFout = document.getElementById('berichtFout');
  if (naamVeld.value.trim() === '')
  {
    naamFout.style.display = 'block';
    naamFout.textContent = 'Naam is verplicht!';
    event.preventDefault();
  }
  else
  {
    naamFout.style.display = 'none';
  }
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailVeld.value))
  {
    emailFout.style.display = 'block';
    emailFout.textContent = 'Voer een geldig e-mailadres in!';
    event.preventDefault();
  }
  else
  {
    emailFout.style.display = 'none';
  }
  if (berichtVeld.value.trim() === '')
  {
    berichtFout.style.display = 'block';
    berichtFout.textContent = 'Bericht is verplicht!';
    event.preventDefault();
  }
  else
  {
    berichtFout.style.display = 'none';
  }
});

document.getElementById('coolFormulier').addEventListener('click', function(event) {
  var tekstveld = document.getElementById('tekstveld');
  var foutmelding = document.getElementById('foutmelding');
  if
  (tekstveld.value.trim() === '')
  {
    foutmelding.textContent = 'Tekstveld mag niet leeg zijn!';
    event.preventDefault();
  }
  else
  {
    foutmelding.textContent = '';
  }
});


