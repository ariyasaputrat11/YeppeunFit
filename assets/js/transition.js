console.log("Yeppeun Transition Loaded ✨");


document.addEventListener(
"DOMContentLoaded",
()=>{

    document.body.classList.add("page-loaded");


    const links = document.querySelectorAll(
        "a[href]"
    );


    links.forEach(link=>{


        const url = link.getAttribute("href");


        // Skip link luar & anchor
        if(
            !url ||
            url.startsWith("#") ||
            url.startsWith("http") ||
            url.startsWith("javascript") ||
            link.target === "_blank"
        ){
            return;
        }



        link.addEventListener(
        "click",
        (e)=>{


            e.preventDefault();


            document.body.classList.remove(
                "page-loaded"
            );


            document.body.classList.add(
                "page-exit"
            );



            setTimeout(()=>{

                window.location.href = url;

            },400);



        });


    });


});

// Smooth Anchor Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{


    anchor.addEventListener(
    "click",
    function(e){


        const target =
        document.querySelector(
            this.getAttribute("href")
        );


        if(target){


            e.preventDefault();


            const offset = 120;

            const targetPosition =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            offset;


            window.scrollTo({

                top: targetPosition,

                behavior:"smooth"

        });


        }


    });


});