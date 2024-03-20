const veranderKleur = () => {
  const tekstElement = document.getElementById("tekst");

  const randomKleur = '#' + Math.floor(Math.random()*16777215).toString(16);
  //chatGPT gebruikt om de random te maken.
  tekstElement.style.color = randomKleur;
};

document.getElementById("veranderKleur").addEventListener("click", veranderKleur);
