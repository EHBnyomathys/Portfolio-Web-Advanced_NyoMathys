document.getElementById('flexboxGridButton').addEventListener('click', function() {
  alert('Maak eens je venster grooter en kleiner, je zal dan het effect van de flexbox ervaren!');
});
document.getElementById('SelfExecButton').addEventListener('click', function() {
  alert('Refresh de site een keer, de self executing function is de functie die de gebruiker verwelkomt!');
});
(function() {
  window.onload = function() {
    alert('Welkom op de website van Nyo Mathys!');
  };
})();
