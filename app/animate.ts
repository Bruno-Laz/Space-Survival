import { ctx, canvas } from './canvas';
import { Eduardo } from './Player'
import { pew } from './Pew'
import { scoreboard } from './Scoreboard'


function erase() {
  //clears screen
  ctx.clearRect(0, 0, canvas.width, canvas.height);

}

export function draw() {
  //Draws the player
  Eduardo.drawEduardo()
  //Draws the lasers
  pew.draw()
  //puts timer on the sceen
  scoreboard.write()
  //Puts health on the screen
  scoreboard.hitCount()
}

function update() {
  //Move the lasers across the screen
  pew.move()
  //make the timer go up while the player has health
  if (scoreboard.health > 0){scoreboard.time += 1/60}
  //resets the timer to 0 when the player reaches 0 health
  if (scoreboard.health < 0){scoreboard.time = 0}
  //Resets the players health when they die
  if (scoreboard.health < 0){scoreboard.health = 75}
}

//animates in 60 frames per second
export function animate() {
  erase()
  draw()
  update()
  window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);
