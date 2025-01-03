menuicon = document.querySelector("menuicon");
menuicon.onclick = function() {
  navBar = document.querySelector("navlist");
  navBar.classlist.toggle("active");
}