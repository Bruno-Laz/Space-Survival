import {player} from './Player'
import {canvas} from './canvas'
import {pew} from './Pew'



canvas.addEventListener (
  'mousemove',
  function(ev){
    player.x = ev.offsetX
    player.y = ev.offsetY
  }
)


  