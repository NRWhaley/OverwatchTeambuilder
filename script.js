

window.onload = function(){
   let damage = document.getElementsByClassName('addHero')
  for(let i = 0; i < damage.length; i++){
    damage[i].addEventListener('click', addHero);
  }

}
//refer to buttons in each box
//let addtTwohOne = document.getElementById('addtTwohOne');

function addHero(){
  let dmg = event.target.parentElement.parentElement.getElementsByClassName('HeroDmg')[0];

  console.log(dmg)
  dmg.textContent = 'hi'





}










//add functionality to buttons for each box.
