// arcade.js
// written by Duncan Murray
// MIT license
// just mucking around playing learning JS 

var GAME_NAME = 'test_game'
var saveGame = localStorage.getItem(GAME_NAME)
var gameData = {
  items: 0,
  lastTick: Date.now(),
  score: 0,
  state: 'START',
}

var enemies = []
var loot = []

var canvas = document.getElementById('game');
var ctx;




//players.push({'x':10,'y':20, 'direction':'still'})
player = {'x':10,'y':20, 'direction':'still', speed:0}



key_locations = [  // WASD
    {'direction':'up', 'key_pressed':'W', 'keycode':87, x:50, y:500},
    {'direction':'down', 'key_pressed':'S', 'keycode':83, x:50, y:550},
    {'direction':'left', 'key_pressed':'A', 'keycode':65, x:10, y:550},
    {'direction':'right', 'key_pressed':'D', 'keycode':68, x:90, y:550},
]

key_locations = [  // Arrow keys 
    {'direction':'up', 'key_pressed':'^', 'keycode':38, x:50, y:500},
    {'direction':'down', 'key_pressed':'v', 'keycode':40, x:50, y:550},
    {'direction':'left', 'key_pressed':'<', 'keycode':37, x:10, y:550},
    {'direction':'right', 'key_pressed':'>', 'keycode':39, x:90, y:550},
]


function init_game() {
    // this is called after the page finishes loading to setup
    // the game intro
    ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText('Welcome to the Battle Simulator',20,100)
    ctx.font = "20px Arial";
    ctx.fillText('Press START FIGHT to begin play',20,250)
    ctx.fillText('Arrow keys to move, space to shoot',20,300)

}

function start_game() {
    // this is the start of the game so we need to clear the scree
    // and draw the canvas and sprites
    console.log('STARTING FIGHT')


    // add some enemies
    enemies.push({"Name":"red_circle","x":700, "y":40})
    enemies.push({"Name":"red_circle","x":600, "y":400})
    loot.push({"Name":"jewel","x":100, "y":400})
    loot.push({"Name":"jewel","x":300, "y":100})
    loot.push({"Name":"jewel","x":400, "y":200})
    loot.push({"Name":"jewel","x":500, "y":600})
    loot.push({"Name":"jewel","x":600, "y":300})
    loot.push({"Name":"jewel","x":400, "y":20})
    loot.push({"Name":"jewel","x":700, "y":150})
    //console.log(enemies)
    gameData.state = 'RUN'
    document.getElementById('btn_start').visible = false
    redraw_all()

}

// -----------------------------------------------------------------
//     Timers for Game     #####################
//                        #     H       0000    #  
//                       #     HH      0    0    #   
//                       #      H      0    0    #  
//                        #     H       0000    #  
//                         #####################
// -----------------------------------------------------------------
setInterval(onTimerTick, 33); // 33 milliseconds = ~ 30 frames per sec

function onTimerTick() {
    // Do stuff.
    if (gameData.state != 'START') {
        
        movePlayer()
        updateGame()
        redraw_all()
    }
}

setInterval(playerStopMoving, 500); // doesnt quite work

function playerStopMoving() {
    // Do stuff.
    //player.direction = 'still'
}


function updateGame() {
    // this is the gameplay - here we check if the player
    // has collected anything or shot something

    // move monsters towards player 

    // move bullets 

    // random spawn new items 

}


// -----------------------------------------------------------------
//     User Input and Event Listeners
//                                        # ----------------------#             
//                                         # \   \ W \   \   \   \ #              
//                                          # ----------------------#             
//                                           # \ A \ S \ D \   \   \ #              
//                                            # --------------------- #             
//                                                        
// -----------------------------------------------------------------

window.onload = function(){
    // start up code
    // canvas = document.getElementById('"canvas_battle');
    init_game()
    console.log('javascript loaded via onload')
    
};


document.addEventListener("DOMContentLoaded", function(event){
    // your code here
    //console.log('javascript loaded via DOMContentLoaded')
  });

document.addEventListener('mousemove', function(e) {
    //console.log(document.elementFromPoint(e.pageX, e.pageY));


})

document.addEventListener('click', function(e) {
    //console.log(document.elementFromPoint(e.pageX, e.pageY));

    if (gameData.state == 'START') {
        start_game()
    }
    else {

    [y,x] = getCursorPosition(e)
    //console.log("tile_x: " + x + " tile_y: " + y);

    // first, check to see if we clicked a fruit
    //addFruit(img_apple)
    yclicked = Math.floor(y/1)
    xclicked = Math.floor(x/1)
    gameData.score += 1
    getCanvasObjectClicked(x,y)
    }

})

/* BELOW WORKS FOR WASD KEYS 
document.addEventListener("keypress", function(event) {
    console.log('key pressed: ' + event.keyCode)
    if (event.keyCode == '119') {
        move_request('up')
    }
    else if (event.keyCode == '115') {
        move_request('down') // down arrow - was 40
    }
    else if (event.keyCode == '97') {
        move_request('left')
    }
    else if (event.keyCode == '100') {
        move_request('right')
    }
    else {
        player.direction = 'still'
    }
 
});

*/




document.addEventListener("keydown", function(event) {
    //console.log('key DOWN pressed: ' + event.keyCode)
    key_locations.forEach((k, index, array) => {
        if (k.keycode == event.keyCode) {
            move_request(k.direction)
        }
    })


/*
    if (event.keyCode == '38') {
        move_request('up')
    }
    else if (event.keyCode == '40') {
        move_request('down') // down arrow - was 40
    }
    else if (event.keyCode == '37') {
        move_request('left')
    }
    else if (event.keyCode == '39') {
        move_request('right')
    }
    else {
        player.direction = 'still'
    }
 */


});

function move_request(direction) {
    // this handles whether the player keeps moving when 
    // clicking in same direction or not. It is needed so 
    // handles keyboard input , swipe on mobile or mouse click 
    // on the key maps on the canvas

    if (direction == 'up') {
        if (player.direction == 'up') {
            player.direction = 'still'
        } else {
        player.direction = 'up'
        }

    }
    else if (direction == 'down') {
        // down arrow - was 40
        if (player.direction == 'down') {
            player.direction = 'still'
        } else {
        player.direction = 'down'
        }
    }
    else if (direction == 'left') {
        // left arrow - was 37
        if (player.direction == 'left') {
            player.direction = 'still'
        } 
        else {
            player.direction = 'left'
        }
    }
    else if (direction == 'right') {
       // right arrow -- was 39
       if (player.direction == 'right') {
        player.direction = 'still'
        } 
        else {
            player.direction = 'right'
        }

    }
    else {
        player.direction = 'still'
    }
    

}


function movePlayer() {
    if (player.direction === 'up') {
        player.y = player.y - 20
    }
    else if (player.direction === 'down') {
        player.y = player.y + 20
    }
    else if (player.direction === 'left') {
       player.x = player.x - 20
     }
    else if (player.direction === 'right') {
       player.x = player.x + 20
    }
 
    check_player_position()
  
}



function check_player_position() {
    if (player.x < 0) {
        player.x = canvas.width -50
    }
    if (player.y < 0) {
        player.y = canvas.height-50
    }
    if (player.x > canvas.width-50) {
        player.x = 0
    }
    if (player.y > canvas.height-50) {
        player.y = 0
    }

}


function getCanvasObjectClicked(x,y) {
    // called when user clicks on canvas or presses on mobile
    // to see if they clicked an object on the map OR a key 
    // legend to move the player
    // If a KEY_LOCATION key is pressed, then call the key 
    // move_ command 

    //console.log('you clicked ',x,y)
  
    key_locations.forEach((k, index, array) => {

        if ((k.x > x-35) && (k.x < x) && (k.y > y-35) && (k.y < y)) {
            //console.log('YOU CLICKED KEY', k)
            move_request(k.direction)
        }

    })



}



// -----------------------------------------------------------------
//     Draw the Screen        #######################
//                           #                       #
//                          #      /*#      #*\       #
//                          #       #*      *#        #
//                          #           {}            #
//                          #    @\            /@     #
//                          #     @@@@@@@@@@@@@@      #
//                           #                       #
//                            #######################
// -----------------------------------------------------------------


function drawPlayer() {
    // this draws onto the canvas using javascript
    //console.log('drawing sprite')
    var eye_x_left 
    var eye_x_right
    var eye_y
    //ctx.beginPath();
    ctx.strokeStyle = "black"
    
    ctx.beginPath()
    ctx.fillStyle = 'gray'
    ctx.arc(player.x+75, player.y+75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
    //ctx.moveTo(110, 75);
    ctx.beginPath()
    ctx.arc(player.x+75, player.y+95, 25, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.closePath();
    ctx.stroke();
    //ctx.moveTo(65, 65);
    ctx.beginPath()
    ctx.fillStyle = 'white'
    ctx.arc(player.x+50, player.y+65, 20, 0, Math.PI * 2, true);  // Left eye
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
    //ctx.moveTo(95, 65);
    ctx.beginPath()
    ctx.arc(player.x+100, player.y+65, 20, 0, Math.PI * 2, true);  // Right eye
    ctx.fill();
    
    ctx.closePath();
    ctx.stroke();

    // calculate inner eyeballs based on direction
    if (player.direction == 'still') {
        eye_x_left = player.x+50
        eye_x_right = player.x+100
        eye_y = player.y+65
    } else if (player.direction == 'left') {
        eye_x_left = player.x+40
        eye_x_right = player.x+90
        eye_y = player.y+65
    }
 else if (player.direction == 'right') {
    eye_x_left = player.x+60
    eye_x_right = player.x+110
    eye_y = player.y+65
}
 else if (player.direction == 'up') {
    eye_x_left = player.x+50
    eye_x_right = player.x+100
    eye_y = player.y+55
}
 else if (player.direction == 'down') {
    eye_x_left = player.x+50
    eye_x_right = player.x+100
    eye_y = player.y+75
}

   // draw inner eyeballs based on direction
   ctx.fillStyle = 'black'
   ctx.beginPath()
   ctx.arc(eye_x_left, eye_y, 10, 0, Math.PI * 2, true);  // Left eye
   ctx.fill();
   ctx.closePath();
   ctx.stroke();
   //ctx.moveTo(95, 65);
   ctx.beginPath()
   ctx.arc(eye_x_right, eye_y, 10, 0, Math.PI * 2, true);  // Right eye
   ctx.fill();
   ctx.closePath();
   ctx.stroke();


}


function drawEnemy(enemy) {
    eye_x_left = enemy.x-15
    eye_x_right = enemy.x+15
    eye_y = enemy.y+5

    ctx.strokeStyle = "maroon"
    ctx.beginPath()
    ctx.fillStyle = 'red'
    ctx.arc(enemy.x, enemy.y, 30, 0, Math.PI * 2, true); // Outer circle
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath()   // left eye
    ctx.fillStyle = 'white'
    ctx.arc(enemy.x-15, enemy.y, 10, 0, Math.PI, false);  
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath()   // right eye
    //ctx.fillStyle = 'black'
    ctx.arc(enemy.x+15, enemy.y, 15, -1, Math.PI, false);  
    ctx.closePath();
    ctx.stroke();

    ctx.fillStyle = 'black'
    ctx.beginPath()
    ctx.arc(eye_x_left, eye_y, 3, 0, Math.PI * 2, true);  // Left eye
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
    //ctx.moveTo(95, 65);
    ctx.beginPath()
    ctx.arc(eye_x_right, eye_y, 6, 0, Math.PI * 2, true);  // Right eye
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
 

}



function drawLoot(loot) {
    ctx.strokeStyle = "blue"
    ctx.fillStyle = 'yellow'
    ctx.beginPath()
    ctx.arc(loot.x+3, loot.y, 15, 0, Math.PI * 2, true); 
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
 
    
    ctx.fillStyle = 'orange'
    ctx.beginPath();
    ctx.moveTo(loot.x, loot.y);
    ctx.lineTo(loot.x+10, loot.y+10);
    ctx.lineTo(loot.x+10, loot.y-10);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(loot.x+5, loot.y);
    ctx.lineTo(loot.x-5, loot.y-10);
    ctx.lineTo(loot.x-5, loot.y+10);
    ctx.fill();
    ctx.closePath();

    //ctx.stroke();

}


function draw_fight_screen() {
    // draws the background of the battle screen including 
    // scores, images, etc and also loads sounds
    //ctx.font = "20px Arial";
    //ctx.fillText('Score: 999',100,25)
 

    key_locations.forEach((k, index, array) => {
        //console.log(k.x); // 100, 200, 300
        //console.log(index); // 0, 1, 2
        //console.log(array); // same myArray object 3 times
        if (k.direction === player.direction) {
            sprite_button(k.x,k.y, k.key_pressed, 'green')
            //console.log('drawing pressed key' , k)
        }
        else {
            //console.log('drawing UNpressed key' , k)
            sprite_button(k.x,k.y, k.key_pressed, 'white')   
        }



    });



/*
    for (k in key_locations) {
        if (k.direction === player.direction) {
            sprite_button(k.x,k.y, k.key_pressed, 'green')
            console.log('drawing pressed key' , k)
        }
        else {
            console.log('drawing UNpressed key' , k)
            sprite_button(k.x,k.y, k.key_pressed, 'white')   
        }
    }


    // draw components for controls
    if (player.direction == 'down') {
        sprite_button(50,550, 'S', 'green')
    } else {
        sprite_button(50,550, 'S', 'white')
    }

    if (player.direction == 'up') {
        sprite_button(50,500, 'W', 'green')
    } else {
        sprite_button(50,500, 'W', 'white')
    }

    if (player.direction == 'left') {
        sprite_button(10,550, 'A', 'green')
    } else {
        sprite_button(10,550, 'A', 'white')
    }

    if (player.direction == 'right') {
        sprite_button(90,550, 'D', 'green')
    } else {
        sprite_button(90,550, 'D', 'white')
    }
*/


}


function redraw_all() {
    // main redraw function to reload the entire canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw_fight_screen()
    //console.log(player)
    drawPlayer()

    
    enemies.forEach((enemy, index, array) => {
        drawEnemy(enemy)
    })

    loot.forEach((lootItem, index, array) => {
        drawLoot(lootItem)
    })






    document.getElementById('score').innerHTML = gameData.score
    

}



function sprite_button(x,y, txt, bg_col) {
    // draw a button on the screen with text in it
    ctx.fillStyle = bg_col;
    ctx.fillRect(x, y, 35, 35);    
    ctx.fillStyle = 'black'
    ctx.fillText(txt, x+10,y+30)
}

function getCursorPosition(event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    return [y, x]

}

