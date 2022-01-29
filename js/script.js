window.addEventListener("DOMContentLoaded", ()=>{
    const wrapperTabs = document.querySelector(".tabheader__items");
    const tabs = document.querySelectorAll(".tabheader__item");
    const content = document.querySelectorAll(".tabcontent");

    function contentHidden (){
        content.forEach(item =>{
            item.style.display = "none";
        });
        tabs.forEach(item =>{
            item.classList.remove("tabheader__item_active");
        })

    };

    function contentShow (i){
        content[i].style.display="block";
        tabs[i].classList.add("tabheader__item_active");
    }
  
 
    contentHidden();
    contentShow(1);
 

})