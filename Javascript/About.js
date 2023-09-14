

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
var firstTime=true;
var FinishAnimaton=true;
var DescriptionArray=[];
cards.forEach(element => {
    DescriptionArray.push(element.getAttribute("DescriptionTextAttr").toString())
});
console.log(DescriptionArray);
cards.forEach((item)=>{
    item.addEventListener('click',()=>{
        
            // FinishAnimaton=false;
            var Duration=0;
            descriptionContainer.style.display= "block";
            item.classList.add('AntonCardsActive');
            if(!firstTime){
                Duration=550;
                setTimeout(()=>{
                    descriptionContainer.classList.remove("ActiveSectionDes");
                    descriptionContainer.classList.add("HideSectionDes");
                    
                },100)
                setTimeout(()=>{
                    ImageChange.setAttribute("src" ,item.firstChild.nextSibling.getAttribute("src").toString());
                    
                    descriptionContainer.classList.remove("HideSectionDes");
                    descriptionContainer.classList.add("ActiveSectionDes");
                    
                },600)
                
            }else{
                ImageChange.setAttribute("src" ,item.firstChild.nextSibling.getAttribute("src").toString());
                    DescriptionText.innerHTML=item.getAttribute("DescriptionTextAttr").toString();
                    firstTime=false;
            }
                
            DescriptionText.innerHTML=item.getAttribute("DescriptionTextAttr").toString();
                // setTimeout(()=>{
                //     DescriptionText.innerHTML='';
                //     var Index=0;
                //     const Time=setInterval(()=>{
                //         DescriptionText.innerHTML+=item.getAttribute("DescriptionTextAttr").toString()[Index];
                //         Index++;
                //         if(Index==item.getAttribute("DescriptionTextAttr").toString().length){
                //             clearInterval(Time);
                //             FinishAnimaton=true;
                //             cards.forEach((ele)=>{
                //                 ele.firstChild.nextSibling.style.opacity="1";
                //                 ele.style.cursor="pointer";
                //             })
                //         }
                //     },30)
                // },Duration)
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

        


        if(window.innerWidth<=990){
            DescriptionText.scrollIntoView({ behavior: 'smooth' });
        }
    })
})

/* */
var AllImageCard= document.querySelectorAll('.AntonCards img');
var mainSection=document.querySelector(".MainSectionCards");

window.addEventListener('resize',editHeightDiv);
function editHeightDiv(){
    var minheight=-1000000000;
    AllImageCard.forEach((ele)=>{
        if(ele.offsetHeight>=minheight){
            minheight=ele.offsetHeight;
        }
    })
    mainSection.style.height=`${minheight+250}px`;
}


