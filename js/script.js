window.addEventListener("DOMContentLoaded", ()=>{
    const wrapperTabs = document.querySelector(".tabheader__items");
    const tabs = document.querySelectorAll(".tabheader__item");
    const content = document.querySelectorAll(".tabcontent");

    function contentHidden (){
        content.forEach(item =>{
            item.classList.remove("show");
            item.classList.add("hidden");
            item.classList.remove("fade");
           
        });
        tabs.forEach(item =>{
            item.classList.remove("tabheader__item_active");
        });

    }
    contentHidden()

    function contentShow (i){
        content[i].classList.remove("hidden");
        content[i].classList.add("show", "fade");
        tabs[i].classList.add("tabheader__item_active");
    }
    contentShow(0);

    wrapperTabs.addEventListener('click', (event)=>{
      
        if(event.target && event.target.classList.contains("tabheader__item")){
           tabs.forEach((item,i)=>{
                if(event.target == item){
                   contentHidden();
                   contentShow(i);
                }
             
            });
        }
      

    });


 
 

});