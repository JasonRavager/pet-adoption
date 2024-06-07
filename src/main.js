const template = document.getElementById("pet-card-template");
const wrapper = document.createDocumentFragment();

async function start() {
  const weatherPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast");
  const weatherData = await weatherPromise.json();

  const temp = weatherData.properties.periods[0].temperature
  document.getElementById("current-temp").innerHTML = temp;
};

start();

async function petsArea() {
  const petsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json");
  const petsData = await petsPromise.json();

  petsData.forEach( pet => {
    const clone = template.content.cloneNode(true);
    clone.getElementById("pet-name").textContent = pet.name;
    clone.getElementById("pet-description").textContent = pet.description;
    clone.getElementById("pet-age").textContent = createAgeText(pet.birthYear);
    
    if (!pet.photo) pet.photo = "image/fallback.jpg" 
    clone.getElementById("pet-photo").src = pet.photo;
    clone.getElementById("pet-photo").alt = `A ${pet.species} named ${pet.name}`;

    wrapper.appendChild(clone);
  });
  document.getElementById("list-of-pets").appendChild(wrapper);
};

petsArea();

function createAgeText(birthYear) {
  const year = new Date().getFullYear();
  const age = year - birthYear;

  if ( age == 0 ) return "less than a year old";
  if ( age == 1 ) return "1 year old"
  
  return `${age} years old`;
};