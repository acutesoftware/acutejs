// as_gfx.js  
// written by Duncan Murray
// (C) Acute Software 2019
// MIT license
// experimental library to handle javascript graphics


function smileyFace(x, y, direction, radius, state) {

    // this draws onto the canvas using javascript
    //console.log('drawing sprite') DEF radius = 50
    var face_centre_x = x + radius + (radius / 2) //- 15 // x+75
    var face_centre_y = y + radius + (radius / 2) //- 15 // y+75
    var face_radius = radius  // y+75
 
    var eye_centre_x_left = x+ radius //- (radius / 2)  + (radius / 2) // should be x=50,y65,r=20
    var eye_centre_x_right = x+radius + (radius ) //- (radius/2 )
    var eye_radius = radius - (radius / 2) //- 5
    var eye_centre_y = y+  radius + eye_radius

    var eye_x_left   // for inner pupil, using direction
    var eye_x_right  // for inner pupil, using direction
    var eye_y

    //ctx.beginPath();
    ctx.strokeStyle = "black"
    
    ctx.beginPath()
    ctx.fillStyle = 'gray'
    ctx.arc(face_centre_x, face_centre_y, face_radius, 0, Math.PI * 2, true); // Outer circle
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath()
    ctx.fillStyle = 'white'
    ctx.arc(eye_centre_x_left,eye_centre_y, eye_radius, 0, Math.PI * 2, true);  // Left eye
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    //ctx.moveTo(95, 65);
    ctx.beginPath()
    //ctx.arc(x+100, y+65, 20, 0, Math.PI * 2, true);  // Right eye
    ctx.arc(eye_centre_x_right,eye_centre_y, eye_radius, 0, Math.PI * 2, true);  // Left eye
    ctx.fill();
    
    ctx.closePath();
    ctx.stroke();

    // calculate inner eyeballs based on direction
    if (direction == 'still') {
        eye_x_left = eye_centre_x_left //x+50
        eye_x_right = eye_centre_x_right // x+100
        eye_y = eye_centre_y //- (eye_radius/2)
    } else if (direction == 'left') {
        eye_x_left = eye_centre_x_left -eye_radius/2 //x+40
        eye_x_right = eye_centre_x_right -eye_radius/2 //x+90
        eye_y = eye_centre_y //y+65
    }
 else if (direction == 'right') {
    eye_x_left = eye_centre_x_left + eye_radius/2 //x+60
    eye_x_right = eye_centre_x_right + eye_radius/2 // x+110
    eye_y = eye_centre_y //- (eye_radius/2)y+65
}
 else if (direction == 'up') {
    eye_x_left = eye_centre_x_left //x+50
    eye_x_right = eye_centre_x_right // x+100
    eye_y = eye_centre_y  -eye_radius/2// y+55
}
 else if (direction == 'down') {
    eye_x_left = eye_centre_x_left //x+50
    eye_x_right = eye_centre_x_right // x+100
    eye_y = eye_centre_y + eye_radius/2// y+75
}

   // draw inner eyeballs based on direction
   ctx.fillStyle = 'black'
   ctx.beginPath()
   ctx.arc(eye_x_left, eye_y, eye_radius/2, 0, Math.PI * 2, true);  // Left eye
   ctx.fill();
   ctx.closePath();
   ctx.stroke();
   //ctx.moveTo(95, 65);
   ctx.beginPath()
   ctx.arc(eye_x_right, eye_y, eye_radius/2, 0, Math.PI * 2, true);  // Right eye
   ctx.fill();
   ctx.closePath();
   ctx.stroke();


    // draw the mouth based on state 
    if (state == 'happy') {
        ctx.beginPath()
        ctx.arc(face_centre_x, face_centre_y+radius/2, radius/4, 0, Math.PI, false);  // Mouth (clockwise)
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    } else if (state == 'shock') {
        ctx.beginPath()
        ctx.arc(face_centre_x, face_centre_y+radius/2, radius/4, 1, Math.PI, false);  // Mouth (clockwise)
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

    }

 else if (state == 'sad') {
    ctx.beginPath()
    ctx.arc(face_centre_x, face_centre_y+radius/2, radius/4, 0, Math.PI*2, false);  // Mouth (clockwise)
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

}


}


