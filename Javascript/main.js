


/* Start Animation Page (news , event )*/
const textchanges=document.querySelectorAll(".TextChange");
const MarkLine=document.querySelector(".MarkLine");
textchanges.forEach((item)=>{
  item.addEventListener("click",(e)=>{
    e.preventDefault()
    MarkLine.classList.toggle("activeAnton");
    textchanges.forEach(element => {
      element.classList.toggle("ActiveText");
    });
    if(textchanges[0].classList.contains("ActiveText")){
      newsContainer.style.display="block";
      eventsContainer.style.display="none";
    }else{
      newsContainer.style.display="none";
      eventsContainer.style.display="block";
    }
    updateHeightDiv()
  })
})
/* end  Animation Page (news , event )*/
/*  Animation Show Description on Card*/
/*
  I split animation intro two type when window greater than 990px to show left or right card
  I Disable see less button animation in short Screen 
 */
/*Declare All Variable Needed */
var AllSeeMoreButton=document.querySelectorAll(".SeeMore");
var AllSeeLessButton=document.querySelectorAll(".SeeLess");
var AllChildCard=document.querySelectorAll(".cardChild");
var AllDescription=document.querySelectorAll(".Description");
if(window.innerWidth>=991){
  AllSeeMoreButton.forEach((item)=>{
    item.addEventListener("click",()=>{
      const index = Array.from(AllSeeMoreButton).indexOf(item);
      if(index%2==0){
        item.classList.add("ActiveButtonRight");
        AllChildCard[index].classList.add("ActiveKeroCardRight")
        AllDescription[index].classList.remove("AntonHideLeftSide");
        AllDescription[index].style.display="block";
        setTimeout(()=>{
          AllSeeLessButton[index].style.transform = 'translateX(0)';
        },100)
      }else{
        item.classList.add("HideButtonLeft");
        setTimeout(()=>{
          AllSeeLessButton[index].style.transform = 'translateX(0)';
        },100)
        AllDescription[index].classList.remove("AntonHideLeftSide");
        AllDescription[index].classList.add("activeDecsription");
        AllChildCard[index].classList.add("ActiveKeroCardLeft")
        AllDescription[index].style.display="block";
      }
      updateHeightDiv();
    })
  })
  AllSeeLessButton.forEach((item)=>{
    item.addEventListener("click",()=>{
      const index = Array.from(AllSeeLessButton).indexOf(item);
      if(index%2==0){
        AllSeeLessButton[index].style.transform = 'translateX(-650px)';
        AllChildCard[index].classList.remove("ActiveKeroCardRight")
        AllDescription[index].classList.add("AntonHideLeftSide");
        setTimeout(()=>{
          AllDescription[index].style.display="none";
          AllSeeLessButton[index].style.transform = 'translateX(-450px)';
         
        },2000)
        setTimeout(()=>{
          AllSeeMoreButton[index].classList.remove("ActiveButtonRight");
        },1200)
      }else{
        AllSeeLessButton[index].style.transform = 'translateX(200px)';
        AllDescription[index].classList.add("AntonHideLeftSide");
        AllDescription[index].classList.remove("activeDecsription");
        AllChildCard[index].classList.remove("ActiveKeroCardLeft")
        setTimeout(()=>{
          AllSeeMoreButton[index].classList.remove("HideButtonLeft");
          AllSeeLessButton[index].style.transform = 'translateX(108px)';
          AllDescription[index].style.display="none";
        },1200)
        setTimeout(()=>{
          AllSeeMoreButton[index].classList.remove("ActiveButtonRight");
        },1200)
      }
      updateHeightDiv();
    })
  })
}else{
  AllSeeMoreButton.forEach((item)=>{
    item.addEventListener("click",()=>{
      const index = Array.from(AllSeeMoreButton).indexOf(item);
        item.classList.add("ActiveButtonRight");
        AllDescription[index].classList.remove("AntonHideLeftSide");
        AllChildCard[index].classList.add("ActiveKeroCardBottom")
        AllDescription[index].style.display="block";
        AllSeeLessButton[index].style.transform = 'translateX(0)';
        updateHeightDiv();
    })
  })
  AllSeeLessButton.forEach((item)=>{
    item.addEventListener("click",()=>{
      const index = Array.from(AllSeeLessButton).indexOf(item);
        AllDescription[index].classList.add("AntonHideLeftSide");
        AllChildCard[index].classList.remove("ActiveKeroCardBottom");
        setTimeout(()=>{
          AllDescription[index].style.display="none";
          AllSeeLessButton[index].style.transform = 'translateX(-450px)';
          updateHeightDiv();
        },2000)
        setTimeout(()=>{
          AllSeeMoreButton[index].classList.remove("ActiveButtonRight");
        },1300)
     
    })
  })
}
/* Resize Section Because Postion Absolute  */
window.addEventListener("resize",updateHeightDiv);
function updateHeightDiv(){
  var divHeight;
  if(newsContainer.style.display=="block"){
    divHeight = newsContainer.offsetHeight;
  }else if(eventsContainer.style.display=="block"){
    divHeight = eventsContainer.offsetHeight;

  }
  document.querySelector(".SectionKero").style.height=`${divHeight+30}px`;
}
/* End Resize Section Because Postion Absolute  */





  