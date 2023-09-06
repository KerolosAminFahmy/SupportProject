
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
  const div123 = document.getElementById('MyDivId'); 
  const divHeight = div123.offsetHeight;
  document.querySelector(".SectionKero").style.height=`${divHeight+30}px`;
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


var AllSeeMoreButton=document.querySelectorAll(".SeeMore");
var AllSeeLessButton=document.querySelectorAll(".SeeLess");
var AllDescription=document.querySelectorAll(".Description");
console.log(window.innerWidth)
if(window.innerWidth>=991){
  AllSeeMoreButton.forEach((item)=>{
    item.addEventListener("click",()=>{
      const index = Array.from(AllSeeMoreButton).indexOf(item);
      if(index%2==0){
        item.classList.add("ActiveButtonRight");
        AllDescription[index].classList.remove("AntonHideLeftSide");
        AllDescription[index].style.display="block";
        setTimeout(()=>{
          AllSeeLessButton[index].style.transform = 'translateX(0)';
        },100)
      }
    })
  })
  AllSeeLessButton.forEach((item)=>{
    item.addEventListener("click",()=>{
      const index = Array.from(AllSeeLessButton).indexOf(item);
      if(index%2==0){
        AllSeeLessButton[index].style.transform = 'translateX(-650px)';
        AllDescription[index].classList.add("AntonHideLeftSide");
        setTimeout(()=>{
          AllDescription[index].style.display="none";
          AllSeeLessButton[index].style.transform = 'translateX(-450px)';
        },2000)
        setTimeout(()=>{
          AllSeeMoreButton[index].classList.remove("ActiveButtonRight");
        },1200)
      }
    })
  })
}else{
  AllSeeMoreButton.forEach((item)=>{
    item.addEventListener("click",()=>{
      const index = Array.from(AllSeeMoreButton).indexOf(item);
        item.classList.add("ActiveButtonRight");
        AllDescription[index].classList.remove("AntonHideLeftSide");
        AllDescription[index].style.display="block";
          AllSeeLessButton[index].style.transform = 'translateX(0)';

    })
  })
  AllSeeLessButton.forEach((item)=>{
    item.addEventListener("click",()=>{
      const index = Array.from(AllSeeLessButton).indexOf(item);
        AllDescription[index].classList.add("AntonHideLeftSide");
        setTimeout(()=>{
          AllDescription[index].style.display="none";
          AllSeeLessButton[index].style.transform = 'translateX(-450px)';
        },2000)
        setTimeout(()=>{
          AllSeeMoreButton[index].classList.remove("ActiveButtonRight");
        },1300)
    })
  })
}
