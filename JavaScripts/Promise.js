document.addEventListener('DOMContentLoaded', () => {
  function loadData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

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
