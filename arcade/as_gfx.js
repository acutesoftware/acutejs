// as_gfx.js  
// written by Duncan Murray
// (C) Acute Software 2019
// MIT license
// experimental library to handle javascript graphics


function smileyFace(x, y, direction, radius) {

    // this draws onto the canvas using javascript
    //console.log('drawing sprite')
    var eye_x_left 
    var eye_x_right
    var eye_y
    //ctx.beginPath();
    ctx.strokeStyle = "black"
    
    ctx.beginPath()
    ctx.fillStyle = 'gray'
    ctx.arc(x+75, y+75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
    //ctx.moveTo(110, 75);
    ctx.beginPath()
    ctx.arc(x+75, y+95, 25, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.closePath();
    ctx.stroke();
    //ctx.moveTo(65, 65);
    ctx.beginPath()
    ctx.fillStyle = 'white'
    ctx.arc(x+50, y+65, 20, 0, Math.PI * 2, true);  // Left eye
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
    //ctx.moveTo(95, 65);
    ctx.beginPath()
    ctx.arc(x+100, y+65, 20, 0, Math.PI * 2, true);  // Right eye
    ctx.fill();
    
    ctx.closePath();
    ctx.stroke();

    // calculate inner eyeballs based on direction
    if (direction == 'still') {
        eye_x_left = x+50
        eye_x_right = x+100
        eye_y = y+65
    } else if (direction == 'left') {
        eye_x_left = x+40
        eye_x_right = x+90
        eye_y = y+65
    }
 else if (direction == 'right') {
    eye_x_left = x+60
    eye_x_right = x+110
    eye_y = y+65
}
 else if (direction == 'up') {
    eye_x_left = x+50
    eye_x_right = x+100
    eye_y = y+55
}
 else if (direction == 'down') {
    eye_x_left = x+50
    eye_x_right = x+100
    eye_y = y+75
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


