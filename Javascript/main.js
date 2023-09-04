
/*Aimation Search Bar */
var iconButton=document.querySelector(".iconSearch");
var SearchInput=document.getElementById("SearchInput");
var isOpen=false;
var isOpen1=false;

iconButton.addEventListener("click",()=>{
  SearchInput.style.opacity="1";
  SearchInput.style.width="250px";
  iconButton.style.opacity="0";
  iconButton.style.zIndex = '-1';
  isOpen=true;
})
var counter=0
SearchInput.addEventListener("mouseout",()=>{
  if (SearchInput.value.trim() === '' && isOpen1) {
    counter=0;
    isOpen1=false;
    SearchInput.style.opacity="0";
    SearchInput.style.width="0px";
    iconButton.style.opacity="1";
    iconButton.style.zIndex = '1';
  }else if(counter==1){
    isOpen1=true;
  }else{
    counter++;
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
const textchanges=document.querySelectorAll(".TextChange");
const MarkLine=document.querySelector(".MarkLine");
textchanges.forEach((item)=>{
  item.addEventListener("click",(e)=>{
    e.preventDefault()
    MarkLine.classList.toggle("activeAnton");
    console.log(e)
    textchanges.forEach(element => {
      element.classList.toggle("ActiveText");
    });

  })
})