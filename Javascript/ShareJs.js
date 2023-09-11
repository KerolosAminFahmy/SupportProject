// Committe in side bar edited
var CommitteeSideBarBtn = document.querySelector(".CommitteeSideBarBtn");
var CommitteeSideUl = document.querySelector(".CommitteeSideUl");
CommitteeSideBarBtn.addEventListener("click" , ()=>{
  CommitteeSideUl.classList.toggle("CommitteeSideUlToggle");
  CommitteeSideBarBtn.style.marginBottom="5px";
})

/* Start Intro Animation  */
const newsContainer=document.getElementById("News");
const eventsContainer=document.getElementById("Events");
const header=document.querySelector("Header");
const BackgroundWaveTop=document.getElementById("backgroundWaveTop");
const BackgroundWaveBottom=document.getElementById("backgroundWaveBottom");
const BackgroundWaveBottomLeft=document.getElementById("backgroundWaveBottomLeft");
window.onload=()=>{
  header.classList.add("ActiveHeader");
  BackgroundWaveTop.classList.add("ActiveBack");
  BackgroundWaveBottom.classList.add("ActiveBack");
  BackgroundWaveBottomLeft.classList.add("ActiveBack");
  newsContainer.style.display="block";
  eventsContainer.style.display="none";
  const divHeight = newsContainer.offsetHeight;
  document.querySelector(".SectionKero").style.height=`${divHeight+30}px`;
}
/* End Intro Animation  */

/*Aimation Search Bar */
/* All Variable needed */
var iconButton=document.querySelector(".iconSearch");
var SearchInput=document.getElementById("SearchInput");
var isOpen=false;
/* All Variable needed */
iconButton.addEventListener("click",()=>{
  SearchInput.style.opacity="1";
  SearchInput.style.width="250px";
  iconButton.style.opacity="0";
  iconButton.style.zIndex = '-1';
  isOpen=true;
})
SearchInput.addEventListener("mouseout",()=>{
  if (SearchInput.value.trim() === '' ) {
    counter=0;
    isOpen1=false;
    SearchInput.style.opacity="0";
    SearchInput.style.width="0px";
    iconButton.style.opacity="1";
    iconButton.style.zIndex = '1';
  }
})
/* End Aimation Search Bar */

/* Animation Exit From Page */
var alllinks = document.querySelectorAll("a");
alllinks.forEach((item)=>{
  item.addEventListener("click",(e)=>{
    e.preventDefault();
    if(item.getAttribute('href')==''){
      return;
    }
    header.classList.remove("ActiveHeader");
    BackgroundWaveTop.classList.remove("ActiveBack");
    BackgroundWaveBottom.classList.remove("ActiveBack");
    BackgroundWaveBottomLeft.classList.remove("ActiveBack"); 
    setTimeout(() => {
      window.location.href = item.getAttribute('href');
  }, 800);
  })
})
/* End Animation Exit */
/* Display Committe In support */
var ButtonCommite=document.querySelector(".committee");
var CommitteeSection=document.querySelector(".CommitteeSection")
ButtonCommite.addEventListener("click",()=>{
  CommitteeSection.classList.toggle("CommitteeActive")

})
var CommitteAnton=document.querySelector(".CommitteAnton");
CommitteAnton.addEventListener("click",()=>{
  if(window.innerWidth<=993){

    CommitteeSection.classList.toggle("CommitteeActive")
  }

})
/*Finish Display Committe */

// menu 

var ToggleBtn = document.querySelector(".toggle-btn");
function toggleMenu() {
  var sideMenu = document.getElementById("sideMenu");            
  sideMenu.classList.toggle("open");
  ToggleBtn.classList.toggle("ActiveMenu");
  if(!ToggleBtn.classList.contains("ActiveMenu") && CommitteeSection.classList.contains("CommitteeActive")){
    CommitteeSection.classList.toggle("CommitteeActive")
  }
}
/*finish menu */

/* Login Active Animation */
var LoginButton=document.querySelector(".LoginButton");
var mainLogin=document.querySelector(".mainLogin");
var Imagelogin=document.querySelector(".ImageLogin img");
var Textlogin=document.querySelector(".TextLogin p");
var Login=document.querySelector(".login");
var isClose=true;
LoginButton.addEventListener("click",openPopup);
function closePopupOnClickOutside(e) {
    if (!Login.contains(e.target)) {
    Login.style.opacity='0';
    setTimeout(()=>{
    Login.classList.remove("ActiveLoginPage");
    Imagelogin.classList.remove("ActiveImageLogin");
    Textlogin.classList.remove("ActiveTextLogin");
    mainLogin.classList.remove("ActiveLoginPage")
  },350)
      document.body.removeEventListener("click", closePopupOnClickOutside);
  }
}
function openPopup(){
  if(!mainLogin.classList.contains("ActiveLoginPage")){
    Login.style.opacity='1';
    mainLogin.classList.add("ActiveLoginPage")
    Login.classList.add("ActiveLoginPage");
    setTimeout(()=>{
      Imagelogin.classList.add("ActiveImageLogin");
      Textlogin.classList.add("ActiveTextLogin");
      document.body.addEventListener("click",closePopupOnClickOutside)
    },350)
    }
}
/* End Login Active Animation */

var buttonLoginMobile=document.querySelector(".buttonLoginKero");
buttonLoginMobile.addEventListener("click",()=>{
  toggleMenu();
  openPopup();
});
