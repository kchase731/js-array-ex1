let players = [
    {name: 'player1',
     health: 10
    }, 
    {name: 'player2',
     health: 20
    }, 
    {name: 'player3',
    health: 30
    }

]

let opponent = {name: 'opponent',
     health: 40
    }


   
    let gamePlayer = prompt('select your player number 1, 2, 3');
    while (gamePlayer !== null){
    if (gamePlayer) {

        gamePlayer = players[gamePlayer-1];
        gamePlayer.health = gamePlayer.health-Damage(1,5);
        opponent.health = opponent.health-Damage(1,5);
        console.log(gamePlayer.name, gamePlayer.health, opponent.name, opponent.health);
    } 

}
 function Damage(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

