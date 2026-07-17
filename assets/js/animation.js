console.log("Yeppeun Animation Loaded ✨");


const observer = new IntersectionObserver(
(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            setTimeout(()=>{

                entry.target.classList.add("show");

            },300);


            observer.unobserve(entry.target);

        }

    });

},
{
    threshold:0.25
});



window.activateAnimation = function(){


    const immediateElements =
    document.querySelectorAll(
        ".hero, #collection-image"
    );


    immediateElements.forEach(element=>{

        element.classList.add("fade-up");

        setTimeout(()=>{

            element.classList.add("show");

        },300);

    });



    const scrollElements =
    document.querySelectorAll(
        ".section-title, .fashion-card, .why-card, .favorite, .social"
    );



    scrollElements.forEach((element,index)=>{


        element.classList.add("fade-up");


        element.style.transitionDelay =
        `${index * 100}ms`;


        observer.observe(element);


    });


};



window.activateAnimation();