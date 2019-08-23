


//refer to buttons in each box
let addHeroes = document.getElementById('addHero');

function addHero(){
  let dmg = event.target.parentElement.parentElement.getElementsByClassName('HeroDmg')[0];

  console.log(dmg)
  dmg.textContent = 'hi'





}










//add functionality to buttons for each box.
addHeroes.addEventListener('click', addHero)