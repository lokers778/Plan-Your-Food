document.addEventListener('DOMContentLoaded', function () {

  setupAlerts();

  var currentWeek = 0;
  loadWeekPreview();

  function loadWeekPreview() {
    var weekNo = document.querySelector('.dashboard__week-number');

    var dashboardRecipes = document.querySelectorAll('.dashboard-recipe');

    var plans = null;
    if (!localStorage.getItem('plans')) {
      plans = [];
    } else {
      plans = JSON.parse(localStorage.getItem('plans'));
    }

    plans.sort(function(a,b){
      return a.weekNumber - b.weekNumber;
    });
      
    var currentPlan = plans[currentWeek];

    if(plans.length === 0){
    weekNo.textContent = 1;
    } else {
      weekNo.textContent = currentPlan.weekNumber;
    }

    for (var i = 0; i < dashboardRecipes.length; i++) {
      for (var j = 0; j < currentPlan.foods.length; j++) {

        if (
          dashboardRecipes[i].classList.contains(currentPlan.foods[j].day)
          &&
          dashboardRecipes[i].classList.contains(currentPlan.foods[j].dish)
        )
          dashboardRecipes[i].textContent = currentPlan.foods[j].recipe;
      }
    }
  }

  var swapperLeft = document.querySelector('.swapper-left');
  var swapperRight = document.querySelector('.swapper-right');
  

  swapperLeft.addEventListener('click', function(){
    swapWeek('left');
  });
  swapperRight.addEventListener('click', function(){
    swapWeek('right');
  });

  function swapWeek(direction) {
    var plans = null;
    if (!localStorage.getItem('plans')) {
      plans = [];
    } else {
      plans = JSON.parse(localStorage.getItem('plans'));
    }

    if (direction === 'right') {
      if (currentWeek === plans.length-1){
        currentWeek = 0;
      } else {
        currentWeek++;
      }
      loadWeekPreview();
    } else if (direction === 'left') {
      if (currentWeek === 0){
        currentWeek = plans.length-1;
      } else {
        currentWeek--;
      }
      loadWeekPreview();
    }
  }
  
})