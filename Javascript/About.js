

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






