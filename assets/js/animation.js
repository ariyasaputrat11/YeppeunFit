console.log("Yeppeun Animation Loaded ✨");


const observer = new IntersectionObserver(
(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            setTimeout(()=>{

                entry.target.classList.add("show");

            },100);

            observer.unobserve(entry.target);

        }

    });

},
{
    threshold:0.1
});


window.activateAnimation = function(){

    const elements = document.querySelectorAll(
        ".section-title, .fashion-card, .why-card, .favorite, .social, .hero, #collection-image"
    );


   elements.forEach((element,index)=>{

    element.classList.add("fade-up");


    element.style.transitionDelay =
    `${index * 100}ms`;


    observer.observe(element);

});

};


window.activateAnimation();