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
            url.startsWith("javascript")
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