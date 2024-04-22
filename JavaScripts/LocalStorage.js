const notitieInvoer = document.getElementById('notitieInvoer');
const toevoegenKnop = document.getElementById('toevoegenKnop');
const notitieLijst = document.getElementById('notitieLijst');
const notitiesWissenKnop = document.getElementById('notitiesWissenKnop');

function notitieToevoegen()
{
  const notitieTekst = notitieInvoer.value.trim();
  if (notitieTekst !== '')
  {
    const li = document.createElement('li');
    li.textContent = notitieTekst;
    notitieLijst.appendChild(li);
    notitiesOpslaan();
    notitieInvoer.value = '';
  }
}
function notitiesOpslaan()
{
  localStorage.setItem('notities', notitieLijst.innerHTML);
}
function notitiesLaden()
{
  const notities = localStorage.getItem('notities');
  if (notities)
  {
    notitieLijst.innerHTML = notities;
  }
}
toevoegenKnop.addEventListener('click', notitieToevoegen);
notitiesWissenKnop.addEventListener('click', function()
{
  notitieLijst.innerHTML = '';
  localStorage.removeItem('notities');
});
window.onload = function()
{
  notitiesLaden();
};
