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
navHome.addEventListener('touchstart', function (e) {
   e.stopPropagation();
   e.preventDefault();
   aboutDiv.style.width = '0vw';
   projectDiv.style.width = '0vw';
})

//Open Contact Details
toggleContact.addEventListener('touchstart', function (e) {
   e.stopPropagation();
   e.preventDefault();
   if (contactDiv.style.height === '8vh') {
      contactDiv.style.height = '20vh';
   } else {
      contactDiv.style.height = '8vh';
   }
})

//Open About Section
toggleAbout.addEventListener('touchstart', function (e) {
   e.stopPropagation();
   e.preventDefault();
   aboutDiv.style.width = '100vw';
})
navToggleAbout.addEventListener('touchstart', function (e) {
   e.stopPropagation();
   e.preventDefault();
   aboutDiv.style.width = '100vw';
})
//Close About Section
toggleHomeFromAbout.addEventListener('touchstart', function (e) {
   e.stopPropagation();
   e.preventDefault();
   aboutDiv.style.width = '0';
})

//Open Project Section
toggleProject.addEventListener('touchstart', function (e) {
   e.stopPropagation();
   e.preventDefault();
   projectDiv.style.width = '100vw';
})
navToggleProject.addEventListener('touchstart', function (e) {
   e.stopPropagation();
   e.preventDefault();
   projectDiv.style.width = '100vw';
})
//Close Project Section
toggleHomeFromProject.addEventListener('touchstart', function (e) {
   e.stopPropagation();
   e.preventDefault();
   projectDiv.style.width = '0';
})