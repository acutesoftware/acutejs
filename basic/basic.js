// basic.js
// written by Duncan Murray
// MIT license
// just mucking around playing learning JS 


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");


// ----------------------------------------------------
// Background FUNCTIONS
// ----------------------------------------------------


window.onload = function(){
    // start up code
    // canvas = document.getElementById('"canvas_battle');
    init()
    console.log('javascript loaded via onload')
    
};

function init() {
    ctx = canvas.getContext("2d");
     ctx.width = document.body.clientWidth; 
    ctx.height = document.body.clientHeight - 200;
       
}


function loadFile(fname) {
    fetch('http://localhost/static/' + fname)
    .then(response => response.text())
    .then((data) => {
      console.log(data)
    })    
}


function txtFromId(id) {
    return document.getElementById(id).value;
  }
  
  function domAddText(txt) {
    let el = document.createElement('div');
    el.innerHTML = '<p>' + txt + '</p>';
    document.body.appendChild(el);
    event.preventDefault();
  }
  
  
  function domAddFromInput(id) {
    let txt = txtFromId(id);
    let el = document.createElement('div');
    el.innerHTML = txt + '<BR>';
    document.body.appendChild(el);
    document.getElementById(id).value = '';
    event.preventDefault();
  }


function drawBorderOnCanvas(ctx, bgColor, borderColor) {
    ctx.fillStyle = "black";
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = bgColor;
    ctx.fillRect(0,0,canvas.width,canvas.height);//for white background
    ctx.globalCompositeOperation = "source-over";
    ctx.lineWidth = 2;
    ctx.strokeStyle=borderColor;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);//for white background

}

function smileyFace(x, y, direction, radius, state) {



    // this draws onto the canvas using javascript
    //console.log('drawing sprite') DEF radius = 50
    //var face_centre_x = x + radius + (radius / 2) //- 15 // x+75
    //var face_centre_y = y + radius + (radius / 2) //- 15 // y+75
    var face_centre_x = x 
    var face_centre_y = y
    var face_radius = radius  // y+75
 
    var eye_centre_x_left = x - radius/2 //- (radius / 2)  + (radius / 2) // should be x=50,y65,r=20
    var eye_centre_x_right = x+ (radius /2) //- (radius/2 )
    var eye_radius = radius - (radius / 2) //- 5
    var eye_centre_y = y //+  radius + eye_radius

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
    //console.log('about to draw mouth, state = ', state)
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

} else { // normal - straight line
    ctx.beginPath();
    ctx.moveTo(face_centre_x-radius/2, face_centre_y+radius/1.5);
    ctx.lineTo(face_centre_x+radius/2, face_centre_y+radius/1.5);
    ctx.stroke();       
}

// draw a dot where the x/y of player actually is
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x+2,y+2);
ctx.stroke();       


}

// ----------------------------------------------------
// PUBLIC FUNCTIONS
// ----------------------------------------------------
function print(txt) {
    // prints a message to the text area
    dv = document.getElementById("log");
    dv.innerHTML = dv.innerHTML + "<BR>" + txt ;
}

function border(bgColor, borderColor) {
    drawBorderOnCanvas(ctx, bgColor, borderColor)
}

function happyFace(x,y, size) {
    smileyFace(x, y, 'still', size, 'happy')
}
function sadFace(x,y, size) {
    smileyFace(x, y, 'still', size, 'sad')
}
function normalFace(x,y, size) {
    smileyFace(x, y, 'still', size, 'normal')
}
