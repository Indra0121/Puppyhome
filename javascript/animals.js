const list = document.querySelector(".puppies");
const animalList = ["dog0", "dog1", "dog2", "dog3", "dog4"];
const animalName = ["Rocky", "Chase", "William", "Ronald", "Martin"];
const animalgender = ["male", "female", "male", "male", "female"];
const Animalage = [2, 3, 12, 24, 18];
const Animalface = [
  "../images/doggy0.jpeg",
  "../images/doggy1.jpg",
  "../images/doggy2.jpg",
  "../images/doggy3.jpg",
  "../images/doggy4.jpg",
];
const description = [
  "Rocky was found in the streets, his momma died not long from when we found him",
  "Chase is a small doggo who got abandoned",
  "William comes from an abusive home and we rescued him hoping he finds a happy home one day",
  "Ronald was born in our Adoption center",
  "Martin is actually a female and the mother of Ronald",
];

const display = [];
for (let idx = 0; idx < animalList.length; idx++) {
  const doggo = {
    id: idx,
    name: animalName[idx],
    faceID: Animalface[idx],
    age:Animalage[idx],
    gender: animalgender[idx],
    desc: description[idx],
  };
  display.push(doggo);
}

let currentIndex = 0;

function renderCard(index) {
  if (index >= 0 && index < display.length) {
    const doggo = display[index];
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div class="background-id" style="background-image: url('${doggo.faceID}');"></div>
      <div class="informations">
        <h2>${doggo.name}</h2>
        <p>Gender: ${doggo.gender}</p>
        <p>Age in months : ${doggo.age}</p>
        <p>Description: ${doggo.desc}</p>
        <button id="${doggo.id}">Adopt</button>
      </div>
    `;

    // Clear the previous card
    list.innerHTML = '';
    // Append the new card
    list.appendChild(card);
  }
}

function handleScroll(e) {
  if (e.deltaY > 0) {
    // Scrolling down
    currentIndex = Math.min(currentIndex + 1, display.length - 1);

  } else {
    // Scrolling up
    currentIndex = Math.max(currentIndex - 1, 0);

   
  }

  renderCard(currentIndex);

  // Prevent scrolling the entire page
  e.preventDefault();
}


list.addEventListener('wheel', handleScroll);

// Initial render
renderCard(currentIndex);