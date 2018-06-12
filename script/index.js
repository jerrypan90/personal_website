//Buttons
let navHome = document.getElementById('navHome');
let toggleContact = document.getElementById('toggleContact');
let toggleAbout = document.getElementById('toggleAbout');
let navToggleAbout = document.getElementById('navToggleAbout');
let navToggleProject = document.getElementById('navToggleProject');
let toggleHomeFromAbout = document.getElementById('toggleHomeFromAbout');
let toggleHomeFromProject = document.getElementById('toggleHomeFromProject');

//Main Divs
let contactDiv = document.getElementById('contactDiv');
let aboutDiv = document.getElementById('aboutDiv');
let projectDiv = document.getElementById('projectDiv');

//Open About Section
toggleAbout.addEventListener('click', function (e) {
   aboutDiv.style.width = '100vw';
})
navToggleAbout.addEventListener('click', function (e) {
   aboutDiv.style.width = '100vw';
})
//Close About Section
toggleHomeFromAbout.addEventListener('click', function (e) {
   aboutDiv.style.width = '0';
})

//Open Project Section
toggleProject.addEventListener('click', function (e) {
   projectDiv.style.width = '100vw';
})
navToggleProject.addEventListener('click', function (e) {
   projectDiv.style.width = '100vw';
})
//Close Project Section
toggleHomeFromProject.addEventListener('click', function (e) {
   projectDiv.style.width = '0';
})