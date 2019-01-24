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


// *****************************************************
//Unit Test wrapper

function runUnitTests() {
  //import { runTests } from './test_acute.js'
  alert('running tests')

}
