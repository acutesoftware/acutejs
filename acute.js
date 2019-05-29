// acute.js
// written by Duncan Murray, (C) Acute Software
// MIT License



// *****************************************************
// Personal Information Manangement wrappers

function completeTask(id) {
   window.location.href = "/task_done/" + id;
   event.preventDefault();
  }

function uncompleteTask(id) {
   window.location.href = "/task_uncomplete/" + id
   event.preventDefault();
  }


// *****************************************************
// String


function lPad(txt, maxLength) {
  while (txt.length < maxLength) {
    txt = '0' + txt;
    }
  return txt;
  }

// *****************************************************
// Date


function todayAsString() {
  let dte = new Date();
  let cur_day = lPad(String(dte.getDate()), 2);
  let cur_month = lPad(String(dte.getMonth() + 1), 2);
  let cur_year = dte.getFullYear();
  return cur_year + "-" + cur_month + "-" + cur_day;
  }

function timestampToString(javascript_timestamp) {
  // why the hell is this not in a standard JS library
  var a = new Date(javascript_timestamp * 1);
  var year = a.getFullYear();
  var month = lPad((a.getMonth() + 1).toString(), 2)
  var date = lPad(a.getDate().toString(), 2);
  var hour = lPad(a.getHours().toString(), 2);
  var min = lPad(a.getMinutes().toString(), 2);
  var sec = lPad(a.getSeconds().toString(), 2);
  var time = year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

function updateClock(){
  var refresh=1000; // Refresh rate in milli seconds
  mytime=setTimeout('showClock()',refresh)
  event.preventDefault();
}

function showClock(elemId) {
  var x = new Date()
  document.getElementById(elemId).innerHTML = x;
  event.preventDefault();
  updateClock();
}

function getLocalTimeOffset() {
  var offset = new Date().getTimezoneOffset();
  console.log(offset);
  return offset;
}


// *****************************************************
// Document Object Model

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

// *****************************************************
// Data (cookies, saving session info)

function saveData(k,v) {
  myCookie = k + '=' + v + '; expires=Thu, 31 Dec 2099 23:33:33 UTC;';
  document.cookie = myCookie;
}


// *****************************************************
// Graphics


function create_ECS() {
ECS.game = new ECS.Game();

}


function makeMap() {

  var ground = [
   [172, 172, 172, 79, 34, 34, 34, 34, 34, 34, 34, 34, 56, 57, 54, 55, 56, 147, 67, 67, 68, 79, 79, 171, 172, 172, 173, 79, 79, 55, 55, 55],
   [172, 172, 172, 79, 34, 34, 34, 34, 34, 34, 146, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 159, 189, 79, 79, 55, 55, 55],
   [172, 172, 172, 79, 79, 34, 34, 34, 34, 34, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 159, 189, 79, 79, 79, 55, 55, 55],
   [188, 188, 188, 79, 79, 79, 79, 34, 34, 34, 36, 172, 172, 143, 142, 157, 79, 79, 79, 79, 79, 79, 187, 159, 189, 79, 79, 79, 55, 55, 55, 55],
   [79, 79, 79, 79, 79, 79, 79, 79, 34, 34, 36, 172, 159, 158, 172, 143, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 39, 51, 51, 51, 55, 55],
   [79, 79, 79, 79, 79, 79, 79, 79, 79, 34, 36, 172, 143, 142, 172, 172, 143, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 55],
   [79, 79, 79, 79, 79, 79, 79, 79, 79, 34, 52, 172, 172, 172, 172, 172, 172, 143, 156, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
   [79, 79, 79, 79, 79, 79, 79, 79, 79, 34, 52, 172, 172, 172, 172, 172, 172, 159, 188, 189, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79],
   [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 188, 158, 172, 172, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 187, 158, 159, 189, 79, 79, 79],
   [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 159, 188, 189, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 79],
   [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 79],
   [155, 142, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 187, 188, 188, 189, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 79],
   [171, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 79],
   [171, 172, 143, 156, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 187, 189, 79, 79, 79, 79],
   [187, 188, 158, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
   [79, 79, 79, 188, 189, 79, 79, 79, 79, 79, 79, 155, 156, 156, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 156],
   [34, 34, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172],
   [34, 34, 34, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172],
   [34, 34, 34, 34, 79, 79, 79, 79, 79, 79, 155, 172, 172, 159, 189, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172],
   [34, 34, 34, 34, 34, 34, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 172]
   ];

   var layer1 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

   var tilesetImage = new Image();
   tilesetImage.src = 'img/app_img/lifesim/mountain_landscape.png';
   tilesetImage.onload = drawImage;
   console.log('drawing map...')
   var canvas = document.getElementById('canvas_tileset');
   var ctx = canvas.getContext('2d');
   var tileSize = 32;       // The size of a tile (32×32)
   var rowTileCount = 20;   // The number of tiles in a row of our background
   var colTileCount = 32;   // The number of tiles in a column of our background
   var imageNumTiles = 16;  // The number of tiles per row in the tileset image
   function drawImage () {
     for (var r = 0; r < rowTileCount; r++) {
        for (var c = 0; c < colTileCount; c++) {
           var tile = ground[ r ][ c ];
           var tileRow = (tile / imageNumTiles) | 0; // Bitwise OR operation
           var tileCol = (tile % imageNumTiles) | 0;
           ctx.drawImage(tilesetImage, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (c * tileSize), (r * tileSize), tileSize, tileSize);
           tile = layer1[ r ][ c ];
           tileRow = (tile / imageNumTiles) | 0;
           tileCol = (tile % imageNumTiles) | 0;
           ctx.drawImage(tilesetImage, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (c * tileSize), (r * tileSize), tileSize, tileSize);
        }
     }
      }
   }

}


var waitForLoad = timeoutms => new Promise((r, j)=>{
    var check = () => {

      console.warn('checking')
      if(document.getElementById('STATUS').innerHTML === 'Ready') 
        r()
      else if((timeoutms -= 100) < 0)
        j('timed out!')
      else
        setTimeout(check, 100)
    }
    setTimeout(check, 100)
  })

  //setTimeout(()=>{document.getElementById('STATUS').innerHTML='Ready'}, 1000)
  (async ()=>{
    document.getElementById('STATUS').innerHTML !== 'Ready'
    waitForLoad(2000)
  })()