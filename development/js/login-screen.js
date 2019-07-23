document.addEventListener('DOMContentLoaded', function () {

  // disable header and sidebar
  header.style.pointerEvents = "none";
  sidebar.style.pointerEvents = "none";
  sidebar.style.filter = "grayscale(90%) blur(2px)";

  showUsername();

  if (localStorage.getItem('username') === null) {
    nameDisplay.textContent = '';
  } else {
    nameDisplay.textContent = localStorage.getItem('username');
    goTo("./app-dashboard.html");
  }

  // event listener on button
  nameButton.addEventListener("click", function (e) {

    if (nameInput.value == '') {
      console.log(':<');
    } else {
      localStorage.setItem('username', nameInput.value);
      showUsername();
      goTo("./app-dashboard.html");
      e.preventDefault();
    }
  });
})