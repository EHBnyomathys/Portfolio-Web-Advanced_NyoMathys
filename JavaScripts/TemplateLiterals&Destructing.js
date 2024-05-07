const user = {
  name: 'Nyo',
  age: 19,
  city: 'Brussel'
};
const { name, age, city } = user;
const message = `Hallo, mijn naam is ${name}. Ik ben ${age} jaar oud en ik woon in ${city}.\nIn de code word 'name', 'age' en 'city' opgehaald van het object met destructing. Daarna worden deze gebruikt in een template literal om het begroetingsbericht te maken.`;
console.log(message);