let clickedButton1 = false;

document.getElementById("button1").addEventListener("click", () => {
  clickedButton1 = true;
});

const greetUser = (name, callback) => {
  if (name.trim() !== "")
  {
    if (clickedButton1)
    {
      alert(`Hallo, ${name}! Waarom heb je op die ene knop geklikt?! Ik had je gevraagd om dit niet te doen!`);
    }
    else
    {
      alert(`Hallo, ${name}! Bedankt om niet op de kleine knop te klikken!`);
    }
  }
  else
  {
    alert("Voer alstublieft uw naam in.");
  }
  if (typeof callback === 'function') {
    callback();
  }
};

document.getElementById("button2").addEventListener("click", () => {
  const name = document.getElementById("naam").value;
  greetUser(name);
});
