

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





var cards = document.querySelectorAll(".AntonCards");
var ImageChange = document.querySelector(".DescriptionImage img");
var DescriptionText = document.querySelector(".DescriptionText");
var descriptionContainer = document.querySelector(".description");
var top = 20;
var midd = 19;
var bottom = 18;
cards.forEach((item)=>{
    item.addEventListener('click',()=>{
        // alert("clicked");
        // console.log(item);
        descriptionContainer.style.display= "block";
        item.classList.add('AntonCardsActive');
        ImageChange.setAttribute("src" ,"");
        console.log(item.firstChild.nextSibling);
        ImageChange.setAttribute("src" ,item.firstChild.nextSibling.getAttribute("src").toString());
            
        DescriptionText.innerHTML=item.getAttribute("DescriptionTextAttr").toString();
        setTimeout(()=>{
            item.classList.remove('AntonCardsActive');
            item.classList.add('CardsAnimation');
            cards.forEach(element => {
                item.classList.remove('CardsAnimation');
                if(element.classList.contains('TopCard')){
                    element.classList.remove('TopCard');
                    element.classList.add('BottomCard');
                }
                else if(element.classList.contains('MidCard')){
                    element.classList.add('TopCard');
                    element.classList.remove('MidCard');
                }
                else if(element.classList.contains('BottomCard')){
                    element.classList.add('MidCard');
                    element.classList.remove('BottomCard');
                }
            });
        },500);



    })
})

