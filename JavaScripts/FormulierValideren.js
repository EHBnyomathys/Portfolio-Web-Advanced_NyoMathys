document.getElementById('coolFormulier').addEventListener('submit', function(event) {
  var tekstvelWaarde = document.getElementById('tekstveld').value;
  if (tekstvelWaarde.trim() === '') {
    event.preventDefault();
    document.getElementById('foutmelding').textContent = 'Het tekstveld is vereist!';
  }
});