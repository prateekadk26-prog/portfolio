const words=["DEVELOPER","PROGRAMMER","TECH ENTHUSIAST"];
const typingelement = document.querySelector("#typing");

let wordindex = 0;
let charindex = 0;
let isdeleting = false;

function typeeffect(){
    const currentword = words[wordindex];
    if(!isdeleting){
        typingelement.textContent = currentword.substring(0, charindex +1);
        charindex++;

        if(charindex === currentword.length){
            isdeleting =true;
            setTimeout(typeeffect, 4200);
            return;
        }
        
    }else{
        typingelement.textContent=currentword.substring(0, charindex-1);
        charindex--;
        if(charindex === 0){
            isdeleting = false;
wordindex = (wordindex+1)%words.length;    
    }
    }
    setTimeout(typeeffect, isdeleting ? 60 : 120);
}

typeeffect();

const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".project")

buttons.forEach(button=>{
    button.addEventListener("click", ()=>{
        const category = button.dataset.category;


        buttons.forEach(btn=> {
            btn.classList.remove("active")
    });
        button.classList.add("active");

        cards.forEach(card=>{
            const matches = category === "all" ||
            card.dataset.category=== category; 
            card.classList.toggle("hide",!matches);
    });
        
    });
});

const timelineitems = document.querySelectorAll(".timeline");
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
},{
    threshold:0.8
});
timelineitems.forEach(item=>{
    observer.observe(item);
});
