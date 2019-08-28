
//tank D.Va, Orisa, Reinhardt,Roadhog,Sigma,Winston, Wrecking Ball, Zarya
//dps Ashe, Bastion, Doomfist, Genji, Hanzo, Junkrat, McCree, Mei, Pharah, Reaper, Soldier: 76, Sombra, Symmetra,
// Torbjorn, Tracer, Widowmaker
//support Ana, Baptiste, Brigitte, Lucio, Mercy, Moira, Zenyatta

const heroes = [
  {name: 'Ashe', primary: 160, health: 200 , ultCost: 2240, pic: undefined},
  {name: 'Ana', primary: 87.5, health: 200, ultCost: 2100, pic: undefined },
  {name: 'Baptiste', primary: 168.75, health: 200, ultCost: 1960, pic: undefined},
  {name: 'Bastion', primary: 104, health: 300, ultCost: 2310, pic: undefined},
  {name: 'Brigitte', primary: 100, health: 200, ultCost: 1500, pic: undefined},
  {name: 'Doomfist', primary: 100, health: 200, ultCost: 2000, pic: undefined},
  {name: 'Dva', primary: 95.38, health: 750, ultCost: 1540, pic: undefined},
  {name: 'Genji', primary: 37.33, health: 200, ultCost: 1680, pic: undefined },
  {name: 'Hanzo', primary: 77 , health: 200 , ultCost: 1680, pic: undefined},
  {name: 'Junkrat', primary: 76.78 , health: 200 , ultCost: 1925 , pic: undefined},
  {name: 'Lucio', primary: 38.46 , health: 200 , ultCost: 2940 , pic: undefined},
  {name: 'McCree', primary: 90 , health: 200 , ultCost: 1680, pic: undefined},
  {name: 'Mei', primary: 55, health: 250, ultCost: 1610, pic: undefined},
  {name: 'Mercy', primary: 100, health: 200, ultCost: 1820, pic: undefined},
  {name: 'Moira', primary: 50 , health: 200 , ultCost: 2380 , pic: undefined},
  {name: 'Orisa', primary: 137.5 , health: 400, ultCost: 1680 , pic: undefined},
  {name: 'Pharah', primary: 90.23 , health: 200, ultCost: 2100 , pic: undefined},
  {name: 'Reaper', primary: 182, health: 250, ultCost: 2100 , pic: undefined},
  {name: 'Reinhardt', primary: 82.5, health: 500, ultCost: 1540, pic: undefined},
  {name: 'Roadhog', primary: 126.75 , health: 600 , ultCost: 2240, pic: undefined},
  {name: 'Sigma', primary: 100 , health: 400 , ultCost: 2170 , pic: undefined},
  {name: 'Soldier76', primary: 129.9, health: 200, ultCost: 2310, pic: undefined},
  {name: 'Sombra', primary: 104 , health: 200, ultCost: 1400, pic: undefined},
  {name: 'Symmetra', primary: 130, health: 200, ultCost: 1680, pic: undefined},
  {name: 'Torbjorn', primary: 116.9 , health: 200, ultCost: 2380, pic: undefined},
  {name: 'Tracer', primary: 156, health: 150, ultCost: 1260 , pic: undefined},
  {name: 'Winston', primary: 120, health: 500, ultCost: 1540, pic: undefined},
  {name: 'Widowmaker', primary: 130, health: 200, ultCost: 1540, pic: undefined},
  {name: 'WreckingBall', primary: 125, health: 600, ultCost: 1540 , pic: undefined},
  {name: 'Zarya', primary: 142.5, health: 400, ultCost: 2100 , pic: undefined},
  {name: 'Zenyatta', primary: 120, health: 200 , ultCost: 2310, pic: undefined}


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
  let name = event.target.parentElement.parentElement.getElementsByClassName('HeroName')[0];
  let dps = event.target.parentElement.parentElement.getElementsByClassName('HeroDPS')[0];

let health = event.target.parentElement.parentElement.getElementsByClassName('HeroHealth')[0];

let ult = event.target.parentElement.parentElement.getElementsByClassName('UltCost')[0]

  let char = event.target.value;
  let character = findChar(char)


  name.textContent = character.name
  dps.textContent = character.primary
  health.textContent = character.health
  ult.textContent = character.ultCost



teamTotals();


}

function teamTotals(){


let dpsAverages = document.getElementsByClassName('HeroDPS')
let healthAverages = document.getElementsByClassName('HeroHealth')
let ultAverages = document.getElementsByClassName('UltCost')
  let teamOneDmgTotal = 0
  let teamTwoDmgTotal = 0
  let teamOneHealthTotal = 0;
  let teamTwoHealthTotal = 0;
  let teamOneUltTotal = 0;
  let teamTwoUltTotal = 0;
   for(let i = 0; i < 6; i++){
      teamOneDmgTotal += parseInt(dpsAverages[i].textContent)
   }
   for(let i = 6; i < dpsAverages.length; i++){
     teamTwoDmgTotal += parseInt(dpsAverages[i].textContent)
   }
   for(let i = 0; i < 6; i++){
    teamOneHealthTotal += parseInt(healthAverages[i].textContent)
    }
    for(let i = 6; i < healthAverages.length; i++){
   teamTwoHealthTotal += parseInt(healthAverages[i].textContent)
    }
    for(let i = 0; i < 6; i++){
  teamOneUltTotal += parseInt(ultAverages[i].textContent)
    }
    for(let i = 6; i < ultAverages.length; i++){
    teamTwoUltTotal += parseInt(ultAverages[i].textContent)
    }


      document.getElementById('teamOneTotal').textContent = (teamOneDmgTotal/6).toFixed() + ' Dmg/sec ' + (teamOneHealthTotal/6).toFixed() + ' avg health ' + (teamOneUltTotal/6).toFixed() + ' avg Ult Cost'
   document.getElementById('teamTwoTotal').textContent = (teamTwoDmgTotal/6).toFixed() + ' Dmg/sec '  + (teamTwoHealthTotal/6).toFixed() + ' avg health ' + (teamTwoUltTotal/6).toFixed() + ' avg Ult Cost'

   if(teamOneDmgTotal.toString() === 'NaN'){
     document.getElementById('teamOneTotal').textContent = 'Insufficient information'
   }

   if(teamTwoDmgTotal.toString() === 'NaN'){
    document.getElementById('teamTwoTotal').textContent = 'Insufficient information'
  }

}








