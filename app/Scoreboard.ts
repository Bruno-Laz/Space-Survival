import {ctx} from './canvas'

export let scoreboard = {
  time : 0,
  health : 75,
  //puts the teh time on the screen 
  write () {
    ctx.font = '30px Futura';//font and size of scoreboard letters
    ctx.fillStyle = 'Red'//colors of letters
    //puts the time on screen
    ctx.fillText(
      `Time: ${this.time.toFixed(1)}`,
      10,25
    )
  },
  //does the same but it puts the health on the screen
  hitCount (){    ctx.font = '30px Futura';
    ctx.fillStyle = 'Red'
    ctx.fillText(
      `Health: ${this.health.toFixed(0)}`,
      350,25
    )
  },
  
}
