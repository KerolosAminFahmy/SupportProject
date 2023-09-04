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
