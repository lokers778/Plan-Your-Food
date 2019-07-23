/*
      TODO
    add edit plan function
*/



document.addEventListener('DOMContentLoaded', function () {

  setupPlansTable();
  
  function setupPlansTable() {

    var table = document.querySelector('.plans-list__table table');
    var plans = null;

    if (!localStorage.getItem('plans')) {
      plans = [];
    } else {
      plans = JSON.parse(localStorage.getItem('plans'));
    }

    for (var i = 0; i < plans.length; i++) {
      var row = document.createElement('tr');

      var id = document.createElement('td');
      id.className = 'plans-list__id';
      id.innerText = i + 1;

      var name = document.createElement('td');
      name.className = 'plans-list__name';
      name.innerText = plans[i].name;

      var about = document.createElement('td');
      about.className = 'plans-list__about';
      about.innerText = plans[i].about;

      var week = document.createElement('td');
      week.className = 'plans-list__week';
      week.innerText = plans[i].weekNumber;

      var actions = document.createElement('td');
      actions.className = 'plans-list__actions';
      actions.innerHTML = '<i class="fas fa-edit"></i><i class="far fa-trash-alt"></i>';

      row.appendChild(id);
      row.appendChild(name);
      row.appendChild(about);
      row.appendChild(week);
      row.appendChild(actions);

      row.addEventListener('click', removePlan);
      // row.addEventListener('click', editPlan);

      table.appendChild(row);
    }
  }

  function removePlan(e) {
    var planToRemove = e.target.parentElement.parentElement;
    if (e.target.classList.contains('fa-trash-alt')) {

      if (confirm('Usunąć plan ' + planToRemove.querySelector('.plans-list__name').innerText + ' ?')) {
        unstorePlan(planToRemove);
        planToRemove.remove();
        location.reload();
      }

    }
  }

  function unstorePlan(badPlan){
    var name = badPlan.querySelector('.plans-list__name').textContent;

    var plans = null;
    if (!localStorage.getItem('plans')) {
      plans = [];
    } else {
      plans = JSON.parse(localStorage.getItem('plans'));
    }

    plans.forEach(function(plan, index){
      if(plan.name == name){
        plans.splice(index, 1);
      }
    })
    localStorage.setItem('plans', JSON.stringify(plans));
  }

})