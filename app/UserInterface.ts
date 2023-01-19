import {Eduardo} from './Player'
import {canvas} from './canvas'
import {pew} from './Pew'

//makes the character move up and down with the players mouse
canvas.addEventListener (
  'mousemove',
  function(ev){
    Eduardo.x = ev.offsetX
    Eduardo.y = ev.offsetY
  }
)


  