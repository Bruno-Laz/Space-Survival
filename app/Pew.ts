import { canvas, ctx } from './canvas';
import { Eduardo } from './Player'
import { scoreboard } from './Scoreboard'

export const pew = {
  fallSpeed: 32,
  windSpeed: 37,
  pew: [
    { x: 200, y: 0 },
    { x: 120, y: 300 },
    { x: 340, y: 275 },
    { x: 494, y: 100 },
    { x: 50, y: 450 },
    { x: 500, y: 250 }
  ],//one of these lasers changes color with the player, his name is Edward.
  //adds extra lasers
  add(number) {
    for (let i = 0; i < number; i++) {
      this.pew.push(
        {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height
        }
      )
    }
  },
  //removes lasers
  remove(number) {
    for (let i = 0; i < number; i++) {
      this.pew.pop()
    }
  },
  //moves the lasers acros the screen
  move() {
    this.pew.forEach(
      (pew) => {
        //subract player health when hit by a laser
        if (Eduardo.playerIsHit(pew.x, pew.y)) {
          scoreboard.health -= 1.25
        }
        //x velocity of the laser
        pew.x += this.windSpeed / 10;
        //y velocity of the lasers
        pew.y += this.fallSpeed / 10;
        //puts laser at teh top of the screen when it hits the bottom
        if (pew.y > canvas.height) {
          pew.y = 0;
        }
        //puts laser on the left side of the screen when it hits the right side
        if (pew.x > canvas.width) {
          pew.x = 0;
        }
      }
    )
  },
  //draws the lasers when called
  draw() {
    this.pew.forEach(
      (pew) => {
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.moveTo(
          pew.x - this.windSpeed,
          pew.y - this.fallSpeed,
        )

        ctx.lineTo(
          pew.x, pew.y
        )
        ctx.stroke();
      }
    )
  }
}
