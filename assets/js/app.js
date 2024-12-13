const elemImagesArr = ['assets/img/horns_skull.png', 'assets/img/fire_horns.png', 'assets/img/green_blob.png', 'assets/img/pink_monster.png', 'assets/img/red_zombie.png'];
let counter = 0;
const trophiesSection = document.getElementById('trophies');
function randomIntBetween(lower, upper) {
  return Math.round(lower + (upper - lower) * Math.random());
}
function randomWidth() {
  return randomIntBetween(0, playfield.offsetWidth - 200) + 'px';
}
function randomHeight() {
  return randomIntBetween(0, playfield.offsetHeight - 200) + 'px';
}

function counterCalculation(){
  counter++;
  if (counter === 10) {
    const trophie = document.createElement('span');
    trophie.innerHTML = '🍓';
    trophiesSection.appendChild(trophie);
  } else if (counter === 50) {
    const trophie = document.createElement('span');
    trophie.innerHTML = '🌽';
    trophiesSection.appendChild(trophie);
  } else if (counter === 100) {
    const trophie = document.createElement('span');
    trophie.innerHTML = '🧱';
    trophiesSection.appendChild(trophie);
  } else if (counter === 150) {
    const trophie = document.createElement('span');
    trophie.innerHTML =  '🐴';
    trophiesSection.appendChild(trophie);
  } else if (counter === 250) {
    const trophie = document.createElement('span');
    trophie.innerHTML = '🏆';
    trophiesSection.appendChild(trophie);
  }

}

function ChangeElemLocation(event) {
  if (event.target.nodeName === "IMG") {
    event.target.style.top = randomHeight();
    event.target.style.left = randomWidth();
    counterCalculation();
    
  }
}

window.addEventListener('load', function () {
  const playfield = document.getElementById('playfield');
  for (i = 0; i < elemImagesArr.length - 1; i++) {
    const monster = document.createElement('img');
    monster.src = elemImagesArr[i];
    monster.className = 'playfield_item';
    monster.style.top = randomHeight();
    monster.style.left = randomWidth();
    playfield.appendChild(monster);
  }
});

playfield.addEventListener('click', ChangeElemLocation);
