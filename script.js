
//tank D.Va, Orisa, Reinhardt,Roadhog,Sigma,Winston, Wrecking Ball, Zarya
//dps Ashe, Bastion, Doomfist, Genji, Hanzo, Junkrat, McCree, Mei, Pharah, Reaper, Soldier: 76, Sombra, Symmetra,
// Torbjorn, Tracer, Widowmaker
//support Ana, Baptiste, Brigitte, Lucio, Mercy, Moira, Zenyatta

const heroes = [
  {name: 'Ashe', primary: 160, health: 200 , ultCost: 2240, pic: undefined},
  {name: 'Ana', primary: 87.5, health: 200, ultCost: 2100, pic: undefined },
  {name: 'Baptiste', primary: 168.75, health: 200, ultCost: 1960, pic: undefined},
  {name: 'Bastion',},
  {name: 'Brigitte',},
  {name: 'Doomfist'},
  {name: 'Dva'},
  {name: 'Genji'},
  {name: 'Hanzo'},
  {name: 'Junkrat'},
  {name: 'Lucio'},
  {name: 'McCree'},
  {name: 'Mei'},
  {name: 'Mercy'},
  {name: 'Moira'},
  {name: 'Orisa'},
  {name: 'Pharah'},
  {name: 'Reaper'},
  {name: 'Reinhardt'},
  {name: 'Roadhog'},
  {name: 'Sigma'},
  {name: 'Soldier76'},
  {name: 'Sombra'},
  {name: 'Symmetra'},
  {name: 'Torbjorn'},
  {name: 'Tracer'},
  {name: 'Widowmaker'},
  {name: 'WreckingBall'},
  {name: 'Zarya'},
  {name: 'Zenyatta'}


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
  let dmg = event.target.parentElement.parentElement.getElementsByClassName('HeroDPS')[0];
  let spd = event.target.parentElement.parentElement.getElementsByClassName('HeroHealth')[0];
  let heal = event.target.parentElement.parentElement.getElementsByClassName('UltCost')[0]


  name.textContent = '-'
  dmg.textContent = '-'
  spd.textContent = '-'
  heal.textContent = '-'



}


function findChar(char){

  for(let i = 0; i < heroes.length; i++){
    if(heroes[i].name === char){
      return heroes[i]
    }
  }
}

function addOnes(){
  let name = event.target.parentElement.parentElement.parentElement.getElementsByClassName('HeroName')[0];
  let dps = event.target.parentElement.parentElement.getElementsByClassName('HeroDPS')[0];
  let char = event.target.value;
  let character = findChar(char)
  //console.log(character)

  name.textContent = '1'
  dps.textContent = '1'





}










//add functionality to buttons for each box.
