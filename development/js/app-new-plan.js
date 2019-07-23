document.addEventListener("DOMContentLoaded", function () {

  // pseudoarray of all selects
  var selects = document.querySelectorAll('.select-recipe');

  // get recipes
  var recipes = [];
  getRecipes();  

  // form elements
  var form = document.querySelector('.new-plan_form');
  var nameInput = document.querySelector('.new-plan__name');
  var aboutInput = document.querySelector('.new-plan__description');
  var weekInput = document.querySelector('.new-plan__week-nr');

  addOptions();

  function getRecipes(){
    var recs = null;

    if (!localStorage.getItem('recipes')) {
      recs = [];
    } else {
      recs = JSON.parse(localStorage.getItem('recipes'));
    }

    recs.forEach(function(recipe){
      recipes.push(recipe.title);
    });
  }


  // funkcja wrzuca dostępne przepisy jako opcje w selectach
  function addOptions() {

    // lecimy przez wszystkie selecty
    for (var i = 0; i < selects.length; i++) {

      // create empty default option
      // var notAnOption = document.createElement('option');
      // notAnOption.textContent = '';
      // selects[i].appendChild(notAnOption);

      //lecimy przez wszystkie przepisy
      for (var j = 0; j < recipes.length; j++) {
        var option = document.createElement("option");
        option.textContent = recipes[j];
        selects[i].appendChild(option);
      }
    }
  }

  form.addEventListener('submit', function (e) {

    var plan = {
      name: null,
      about: null,
      weekNumber: null,
      foods: []
    }

    makePlanObject();
    storePlan(plan);

    // check what happened
    console.log(plan);

    // store plan in localStorage
    function storePlan(plan) {
      var plans = null;
      if (!localStorage.getItem('plans')) {
        plans = [];
      } else {
        plans = JSON.parse(localStorage.getItem('plans'));
      }
      plans.push(plan);
      localStorage.setItem('plans', JSON.stringify(plans));
    }

    function makePlanObject() {

      // uzupełniamy obiekt plan
      plan.name = nameInput.value;
      plan.about = aboutInput.value;
      plan.weekNumber = weekInput.value;

      // lecimy przez selekty
      for (var i = 0; i < selects.length; i++) {

        // lista klas danego selectu
        var classes = selects[i].classList;

        // obiekt żeby wiedzieć jaka potrawa kiedy
        var food = {
          day: null,
          dish: null,
          recipe: selects[i].value
        }

        // lecimy przez klasy danego selecta
        for (var j = 0; j < classes.length; j++) {
          if (j == 1) {
            food.day = classes[j];
          } else if (j == 2) {
            food.dish = classes[j];
          }
        }

        plan.foods.push(food);
      }
    }

    form.reset();
    e.preventDefault();

    window.location = "app-dashboard.html";

  })

});