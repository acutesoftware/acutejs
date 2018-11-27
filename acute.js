function completeTask(id) {
   window.location.href = "/task_done/" + id;
   event.preventDefault();
  }

function uncompleteTask(id) {
   window.location.href = "/task_uncomplete/" + id
   event.preventDefault();
  }
