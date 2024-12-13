let counter = 0;
function Random(a, b) {
  return Math.round(a + (b - a) * Math.random());
}
function Random1() {
  return Random(0, area.offsetWidth - 200) + 'px';
}
function Random2() {
  return Random(0, area.offsetHeight - 200) + 'px';
}
  const area = document.getElementById('playfield');
  const trophiesSection = document.getElementById('trophies');
  const monster1 = document.createElement('img');
  monster1.src = 'assets/img/horns_skull.png';
  monster1.className = 'playfield_item';
  monster1.style.top = Random2();
  monster1.style.left = Random1();
  area.appendChild(monster1);
  const monster2 = document.createElement('img');
  monster2.src = 'assets/img/fire_horns.png';
  monster2.className = 'playfield_item';
  monster2.style.top = Random2();
  monster2.style.left = Random1();
  area.appendChild(monster2);
  const monster3 = document.createElement('img');
  monster3.src = 'assets/img/green_blob.png';
  monster3.className = 'playfield_item';
  monster3.style.top = Random2();
  monster3.style.left = Random1();
  area.appendChild(monster3);
  const monster4 = document.createElement('img');
  monster4.src = 'assets/img/pink_monster.png';
  monster4.className = 'playfield_item';
  monster4.style.top = Random2();
  monster4.style.left = Random1();
  area.appendChild(monster4);
  const monster5 = document.createElement('img');
  monster5.src = 'assets/img/red_zombie.png';
  monster5.className = 'playfield_item';
  monster5.style.top = Random2();
  monster5.style.left = Random1();
  area.appendChild(monster5);
  function changePosition1(){
    monster1.style.top = Random2();
    monster1.style.left = Random1();
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
      trophie.innerHTML = '🐴';
      trophiesSection.appendChild(trophie);
    } else if (counter === 250) {
      const trophie = document.createElement('span');
      trophie.innerHTML = '🏆';
      trophiesSection.appendChild(trophie);
    }
  }
  function changePosition2(){
    monster2.style.top = Random2();
    monster2.style.left = Random1();
    counter++;
    if (counter === 10) {
      const trophie = document.createElement('span');
      trophie.innerHTML = '🍓';
      trophiesSection.appendChild(trophie);
    } else if (counter === 50) {
      const achivment = document.createElement('span');
      achivment.innerHTML = '🌽';
      trophiesSection.appendChild(achivment);
    } else if (counter === 100) {
      const trophie = document.createElement('span');
      trophie.innerHTML = '🧱';
      trophiesSection.appendChild(trophie);
    } else if (counter === 150) {
      const trophie = document.createElement('span');
      trophie.innerHTML = '🐴';
      trophiesSection.appendChild(trophie);
    } else if (counter === 250) {
      const trophie = document.createElement('span');
      trophie.innerHTML = '🏆';
      trophiesSection.appendChild(trophie);
    }
  }
  function changePosition3(){
    monster3.style.top = Random2();
    monster3.style.left = Random1();
    counter++;
    if (counter === 10) {
      const trophie = document.createElement('span');
      trophie.innerHTML = '🍓';
      trophiesSection.appendChild(trophie);
    } else if (counter === 50) {
      const achivment = document.createElement('span');
      achivment.innerHTML = '🌽';
      trophiesSection.appendChild(achivment);
    } else if (counter === 100) {
      const trophie = document.createElement('span');
      trophie.innerHTML = '🧱';
      trophiesSection.appendChild(trophie);
    } else if (counter === 150) {
      const trophie = document.createElement('span');
      trophie.innerHTML = '🐴';
      trophiesSection.appendChild(trophie);
    } else if (counter === 250) {
      const trophie = document.createElement('span');
      trophie.innerHTML = '🏆';
      trophiesSection.appendChild(trophie);
    }
  }
  function changePosition4(){
    monster4.style.top = Random2();
    monster4.style.left = Random1();
    counter++;
    if (counter === 10) {
      const trophie = document.createElement('span');
      trophie.innerHTML = '🍓';
      trophiesSection.appendChild(trophie);
    } else if (counter === 50) {
      const achivment = document.createElement('span');
      achivment.innerHTML = '🌽';
      trophiesSection.appendChild(achivment);
    } else if (counter === 100) {
      const trophie = document.createElement('span');
      trophie.innerHTML = '🧱';
      trophiesSection.appendChild(trophie);
    } else if (counter === 150) {
      const trophie = document.createElement('span');
      trophie.innerHTML = '🐴';
      trophiesSection.appendChild(trophie);
    } else if (counter === 250) {
      const trophie = document.createElement('span');
      trophie.innerHTML = '🏆';
      trophiesSection.appendChild(trophie);
    }
  }
  function changePosition5(){
    monster5.style.top = Random2();
    monster5.style.left = Random1();
    counter++;
    if (counter === 10) {
      const trophie = document.createElement('span');
      trophie.innerHTML = '🍓';
      trophiesSection.appendChild(trophie);
    } else if (counter === 50) {
      const achivment = document.createElement('span');
      achivment.innerHTML = '🌽';
      trophiesSection.appendChild(achivment);
    } else if (counter === 100) {
      const trophie = document.createElement('span');
      trophie.innerHTML = '🧱';
      trophiesSection.appendChild(trophie);
    } else if (counter === 150) {
      const trophie = document.createElement('span');
      trophie.innerHTML = '🐴';
      trophiesSection.appendChild(trophie);
    } else if (counter === 250) {
      const trophie = document.createElement('span');
      trophie.innerHTML = '🏆';
      trophiesSection.appendChild(trophie);
    }
  }
  monster1.addEventListener('click', changePosition1);
  monster2.addEventListener('click', changePosition2);
  monster3.addEventListener('click', changePosition3);
  monster4.addEventListener('click', changePosition4);
  monster5.addEventListener('click', changePosition5);