
/*Aimation Search Bar */
var iconButton=document.querySelector(".iconSearch");
var SearchInput=document.getElementById("SearchInput");
var isOpen=false;
iconButton.addEventListener("click",()=>{
  SearchInput.style.opacity="1";
  SearchInput.style.width="250px";
  iconButton.style.opacity="0";
  iconButton.style.zIndex = '-1';
  isOpen=true;
})
SearchInput.addEventListener("mouseout",()=>{
  if (SearchInput.value.trim() === '') {
    SearchInput.style.opacity="0";
    SearchInput.style.width="0px";
    iconButton.style.opacity="1";
    iconButton.style.zIndex = '1';
  }
})
/* End Aimation Search Bar */
/* Start Intro Animation  */
const header=document.querySelector("Header");
const BackgroundWaveTop=document.getElementById("backgroundWaveTop");
const BackgroundWaveBottom=document.getElementById("backgroundWaveBottom");
const BackgroundWaveBottomLeft=document.getElementById("backgroundWaveBottomLeft");
window.onload=()=>{
  header.classList.add("ActiveHeader");
  BackgroundWaveTop.classList.add("ActiveBack");
  BackgroundWaveBottom.classList.add("ActiveBack");
  BackgroundWaveBottomLeft.classList.add("ActiveBack");
}
/* End Intro Animation  */

var VisionBtn = document.getElementById("VisionBtn");
var WeAreBtn = document.getElementById("WeAreBtn");
var VisionContainer= document.getElementById("VisionContainer");
var WeAreContainer= document.getElementById("WeAreContainer");

VisionBtn.addEventListener('click',()=>{
    WeAreContainer.classList.remove("AntonHideLeftSide");
    VisionContainer.classList.add("AntonHideLeftSide");
    
})
WeAreBtn.addEventListener('click',()=>{
    WeAreContainer.classList.add("AntonHideLeftSide");
    VisionContainer.classList.remove("AntonHideLeftSide");
    
})


var ToggleBtn = document.querySelector(".toggle-btn");
function toggleMenu() {
  var sideMenu = document.getElementById("sideMenu");            
  sideMenu.classList.toggle("open");
  ToggleBtn.classList.toggle("ActiveMenu");
}


