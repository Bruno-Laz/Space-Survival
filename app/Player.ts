
import { ctx, canvas } from './canvas'
import { scoreboard } from './Scoreboard'

export const Eduardo = {
  x: 225,
  y: 225,
  width: 50,
  height: 50,
  Health: 3,
  //draws the player character
  drawEduardo() {
    ctx.strokeStyle = '#32cd32'
    if (75 > scoreboard.health) { ctx.strokeStyle = '#32cd32' }
    if (scoreboard.health < 50) { ctx.strokeStyle = '#fff600' }
    if (scoreboard.health < 25) { ctx.strokeStyle = 'red' }
    ctx.strokeRect(this.x, this.y, this.width, this.height)
    ctx.fillStyle = '#242526'
    ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.lineWidth = 3
    ctx.moveTo(this.x + 15, this.y + 10)
    ctx.lineTo(this.x + 15, this.y + 28)
    ctx.moveTo(this.x + 35, this.y + 10)
    ctx.lineTo(this.x + 35, this.y + 28)
    ctx.moveTo(this.x + 15, this.y + 40)
    ctx.lineTo(this.x + 35, this.y + 40)
    ctx.stroke()
  },
  //craetes where the player can get hit
  playerIsHit(x: number, y: number) {
    if (
      y > this.y//when it hits the top of eduardo
      &&
      y < this.y + this.height//and  hasn't gone through the bottom of eduardo
      &&
      x > this.x//and it hits the right of eduardo
      &&
      x < this.x + this.width//when hits the left of eduardo
      &&
      x > this.x//and hasn't gone through the right of eduardo
    ) {
      return true
    } else {
      return false
    }
  }

}


