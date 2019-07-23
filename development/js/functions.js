
//  display user name in header

function showUsername() {

  if (localStorage.getItem('username') === null) {
    nameDisplay.textContent = '';
  } else {
    nameDisplay.textContent = localStorage.getItem('username');
  }
}

// open other page by providing it's source as an argument ("./app-dashboard.html")

function goTo(source) {
  window.location = source;
}


// highlight current page in sidebar

function highlightCurrentTab() {
  for (var i = 0; i < navLis.length; i++) {
    if (navLis[i].href == window.location.href) {
      navLis[i].parentElement.classList.add('active-site');
    }
  }
}

// show proper alerts and enable their delete buttons

function setupAlerts(){
  
  var recipes = JSON.parse(localStorage.getItem('recipes'));
  var plans = JSON.parse(localStorage.getItem('plans'));
  var info = document.querySelector('.alert-info');
  var warning = document.querySelector('.alert-warning');
  var success = document.querySelector('.alert-success');

  info.addEventListener('click', function(){
    this.parentElement.removeChild(this);
  });
  warning.addEventListener('click', function(){
    this.parentElement.removeChild(this);
  });
  success.addEventListener('click', function(){
    this.parentElement.removeChild(this);
  });

  if(!localStorage.getItem('recipes')){
    info.style.display = 'none';
  } else {
    info.style.display = 'flex';
    info.querySelector('span').textContent = recipes.length;
  }
  if(!localStorage.getItem('plans') || plans.length == 0){
    warning.style.display = 'flex';
  } else {
    warning.style.display = 'none';
  }
}