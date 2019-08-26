
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

   let dpsHeroes = document.getElementsByClassName('dpsSelect')
  for(let i = 0; i < dpsHeroes.length; i++){
    dpsHeroes[i].addEventListener('click', addHeroes);
  }

  let tankHeroes = document.getElementsByClassName('tankSelect')

  for(let i = 0; i < tankHeroes.length; i++){
    tankHeroes[i].addEventListener('click', addHeroes)
  }

  let suppHeroes = document.getElementsByClassName('suppSelect')

  for(let i = 0; i < suppHeroes.length; i++){
    suppHeroes[i].addEventListener('click', addHeroes)
  }





}
//refer to buttons in each box
//let addtTwohOne = document.getElementById('addtTwohOne');


function clearHeroes(){
  let name = event.target.parentElement.parentElement.getElementsByClassName('HeroName')[0];
  let dps = event.target.parentElement.parentElement.getElementsByClassName('HeroDPS')[0];
  let health = event.target.parentElement.parentElement.getElementsByClassName('HeroHealth')[0];
  let ultCost = event.target.parentElement.parentElement.getElementsByClassName('UltCost')[0]


  name.textContent = '-'
  dps.textContent = '-'
  health.textContent = '-'
  ultCost.textContent = '-'



}


function findChar(char){

  for(let i = 0; i < heroes.length; i++){
    if(heroes[i].name === char){
      return heroes[i]
    }
  }
}

function addHeroes(){
  let name = event.target.parentElement.parentElement.parentElement.getElementsByClassName('HeroName')[0];
  let dps = event.target.parentElement.parentElement.getElementsByClassName('HeroDPS')[0];
  let char = event.target.value;
  let character = findChar(char)
  console.log(character)

  name.textContent = '1'
  dps.textContent = '1'





}










//add functionality to buttons for each box.
