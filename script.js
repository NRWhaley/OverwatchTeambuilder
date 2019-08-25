

window.onload = function(){

  let hero = document.getElementsByClassName('addHero')
    for(let i = 0; i < hero.length; i++){
      hero[i].addEventListener('click', addHeroes)
    }

   let ones = document.getElementsByClassName('One')
  for(let i = 0; i < ones.length; i++){
    ones[i].addEventListener('click', addOnes);
  }



}
//refer to buttons in each box
//let addtTwohOne = document.getElementById('addtTwohOne');


function addHeroes(){
  let name = event.target.parentElement.parentElement.getElementsByClassName('HeroName')[0];
  let dmg = event.target.parentElement.parentElement.getElementsByClassName('HeroDmg')[0];

  name.textContent = 'Hi'
  dmg.textContent = 'Bob'


}

function addOnes(){
  let name = event.target.parentElement.parentElement.parentElement.getElementsByClassName('HeroName')[0];
  let dmg = event.target.parentElement.parentElement.parentElement.getElementsByClassName('HeroDmg')[0];


  name.textContent = '1'
  dmg.textContent = '1'





}










//add functionality to buttons for each box.
