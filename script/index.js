let navHome = document.getElementById('navHome');
let toggleContact = document.getElementById('toggleContact');
let toggleAbout = document.getElementById('toggleAbout');
let navToggleAbout = document.getElementById('navToggleAbout');
let navToggleProject = document.getElementById('navToggleProject');
let toggleHomeFromAbout = document.getElementById('toggleHomeFromAbout');
let toggleHomeFromProject = document.getElementById('toggleHomeFromProject');
let contactDiv = document.getElementById('contactDiv');
let aboutDiv = document.getElementById('aboutDiv');
let projectDiv = document.getElementById('projectDiv');

//Home Button
navHome.addEventListener('click', function (event) {
   aboutDiv.style.width = '0vw';
   projectDiv.style.width = '0vw';
})

//Open Contact Details
toggleContact.addEventListener('click', function (event) {
   if (contactDiv.style.height === '8vh') {
      contactDiv.style.height = '20vh';
   } else {
      contactDiv.style.height = '8vh';
   }
})

//Open About Section
toggleAbout.addEventListener('click', function (event) {
   aboutDiv.style.width = '100vw';
})
navToggleAbout.addEventListener('click', function (event) {
   aboutDiv.style.width = '100vw';
})
//Close About Section
toggleHomeFromAbout.addEventListener('click', function (event) {
   aboutDiv.style.width = '0';
})

//Open Project Section
toggleProject.addEventListener('click', function (event) {
   projectDiv.style.width = '100vw';
})
navToggleProject.addEventListener('click', function (event) {
   projectDiv.style.width = '100vw';
})
//Close Project Section
toggleHomeFromProject.addEventListener('click', function (event) {
   projectDiv.style.width = '0';
})