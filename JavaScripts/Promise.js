document.addEventListener('DOMContentLoaded', () => {
  // Simulatie van een asynchrone operatie om gegevens te laden
  function loadData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(); // Simuleer succesvolle gegevensophaaloperatie
        // reject('Fout bij het laden van gegevens'); // Simuleer een foutgeval
      }, 2000); // Simuleer een vertraging van 2 seconden
    });
  }

  // Voeg een event listener toe aan de knop voor het laden van gegevens
  document.getElementById('loadDataBtn').addEventListener('click', async function() {
    const loadingIndicator = document.getElementById('loadingIndicator');
    const completionMessage = document.getElementById('completionMessage');

    loadingIndicator.classList.remove('hidden');

    try {
      await loadData();
      loadingIndicator.classList.add('hidden');
      completionMessage.classList.remove('hidden');
    } catch (error) {
      loadingIndicator.classList.add('hidden');
      console.error('Er is een fout opgetreden:', error);
    }
  });
});
