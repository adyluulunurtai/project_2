window.addEventListener("DOMContentLoaded", ()=>{
   //TABS
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

//TIMER

let deadline = '2022-02-09';

function getTimeRemainig(end) {
    let t = Date.parse(end) - Date.parse(new Date());

    let days = Math.floor(t/(1000*60*60*24));
    let hours = Math.floor(t/(1000*60*60)%24);
    let minutes = Math.floor(t/(1000*60)%60);
    let seconds = Math.floor((t/1000)%60);
    
    return{
        'total' : t,
        'days' : days,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
}

function getZero(num){
    if(num>=0 && num<10){
        return `0${num}`;
    }
    else{
        return num;
    }
}
 
function setClock(end){
    let timer = document.querySelector(".timer");
    let days = timer.querySelector("#days");
    let hours = timer.querySelector("#hours");
    let minutes = timer.querySelector("#minutes");
    let seconds = timer.querySelector("#seconds");
    
    
    function clock (){
        let t = getTimeRemainig(end);
        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);
       
    }
    let timeInterval = setInterval(clock, 1000);
    clock();

}
 
setClock(deadline);

//modal window

const modalTrigger = document.querySelectorAll("[data-modal]");
const modalWindow = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");

modalTrigger.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        modalWindow.classList.add("show");
        modalWindow.classList.remove("hide")
        document.body.style.overflow = "hidden";
    });
});
function closeModal(){
    modalWindow.classList.add("hide");
    modalWindow.classList.remove("show");
    document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);


modalWindow.addEventListener("click", (e) => {
    if(e.target === modalWindow){
        closeModal();
    }
});

document.body.addEventListener("keydown",(e)=>{
    if (e.code === "Escape"){
        closeModal();
    }
});
});