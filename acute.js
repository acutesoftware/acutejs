function completeTask(id) {
   window.location.href = "/task_done/" + id;
   event.preventDefault();
  }

function uncompleteTask(id) {
   window.location.href = "/task_uncomplete/" + id
   event.preventDefault();
  }



function lPad(txt, maxLength) {
  while (txt.length < maxLength) {
    txt = '0' + txt;
    }
  return txt;
  }

function todayAsString() {
  let dte = new Date();
  let cur_day = lPad(String(dte.getDate()), 2);
  let cur_month = lPad(String(dte.getMonth() + 1), 2);
  let cur_year = dte.getFullYear();
  return cur_year + "-" + cur_month + "-" + cur_day;
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
