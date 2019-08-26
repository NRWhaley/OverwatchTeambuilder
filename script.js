
//tank D.Va, Orisa, Reinhardt,Roadhog,Sigma,Winston, Wrecking Ball, Zarya
//dps Ashe, Bastion, Doomfist, Genji, Hanzo, Junkrat, McCree, Mei, Pharah, Reaper, Soldier: 76, Sombra, Symmetra,
// Torbjorn, Tracer, Widowmaker
//support Ana, Baptiste, Brigitte, Lucio, Mercy, Moira, Zenyatta

const heroes = [
  {name: 'Ashe', primary: 40, secondary:  , healing:, pic: },
  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}


]

window.onload = function(){

  let hero = document.getElementsByClassName('clearHero')
    for(let i = 0; i < hero.length; i++){
      hero[i].addEventListener('click', clearHeroes)
    }

   let ones = document.getElementsByClassName('dpsSelect')
  for(let i = 0; i < ones.length; i++){
    ones[i].addEventListener('click', addOnes);
  }



}
//refer to buttons in each box
//let addtTwohOne = document.getElementById('addtTwohOne');


function clearHeroes(){
  let name = event.target.parentElement.parentElement.getElementsByClassName('HeroName')[0];
  let dmg = event.target.parentElement.parentElement.getElementsByClassName('HeroPrimary')[0];
  let spd = event.target.parentElement.parentElement.getElementsByClassName('HeroSecondary')[0];
  let heal = event.target.parentElement.parentElement.getElementsByClassName('HeroHealing')[0]


  name.textContent = '-'
  dmg.textContent = '-'
  spd.textContent = '-'
  heal.textContent = '-'



}

function addOnes(){
  let name = event.target.parentElement.parentElement.parentElement.getElementsByClassName('HeroName')[0];
  let dmg = event.target.parentElement.parentElement.parentElement.getElementsByClassName('HeroDmg')[0];

  console.log(event.target.value)
  name.textContent = '1'
  dmg.textContent = '1'





}










//add functionality to buttons for each box.
