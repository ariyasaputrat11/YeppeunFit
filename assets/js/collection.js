console.log("Yeppeun Collection Loaded ✨");


const params = new URLSearchParams(
    window.location.search
);


const currentCategory = params.get("category");


// HTML Elements

const collectionImage = document.getElementById(
    "collection-image"
);

const collectionTitle = document.getElementById(
    "collection-title"
);

const collectionSubtitle = document.getElementById(
    "collection-description"
);

const productContainer = document.getElementById(
    "product-container"
);

const searchInput = document.getElementById(
    "search-input"
);

const clearSearch = document.getElementById(
    "clear-search"
);


let currentProducts = [];


async function loadCollection(){

    try {


        // Load category data

        const categoryResponse = await fetch(
            "data/categories.json"
        );


        const categories = await categoryResponse.json();



        const category = categories.find(
            item => item.id === currentCategory
        );



        if(!category){

            collectionTitle.textContent = 
            "Collection Not Found";

            return;

        }



        // Set Collection Header

        collectionImage.src =
        `assets/images/collection/banner/${category.banner}`;


        const ogImage =
        document.querySelector(
            'meta[property="og:image"]'
        );


        if(ogImage){

            ogImage.setAttribute(
                "content",
                `assets/images/collection/banner/${category.banner}`
            );

        }


        collectionImage.alt =
        category.name;



        collectionTitle.textContent =
        category.name;



        document.title =
        `Yeppeun Fit — ${category.name} Collection`;



        collectionSubtitle.textContent =
        category.subtitle;



        const metaDescription =
        document.querySelector(
            'meta[name="description"]'
        );


        if(metaDescription){

            metaDescription.setAttribute(
                "content",
                `${category.name} collection from Yeppeun Fit. ${category.subtitle}`
            );

        }


        // Load products

        const productResponse = await fetch(
            "data/products.json"
        );


        const products = await productResponse.json();



        const filteredProducts =
        products.filter(product =>
            product.category === currentCategory &&
            product.active === true
        );


        currentProducts = filteredProducts;


        renderProducts(currentProducts);



    }


    catch(error){

        console.error(
            "Collection loading error:",
            error
        );

    }

}





function renderProducts(products){


    productContainer.innerHTML = "";



    if(products.length === 0){
    productContainer.innerHTML = `

    <div class="empty-state">

        <h3>No Products Available</h3>

        <p>
        New products will be added soon. Stay tuned ✨
        </p>

    </div>

    `;

    return;

}





    products.forEach(product => {



        const card =
        document.createElement("div");



        card.className =
        "fashion-card";



        card.innerHTML = `


        <div class="card-image">
        <img
        src="assets/images/products/${product.image}"
        alt="${product.name}"
        >
        </div>
        ${product.badge ?
        `
        <span class="product-badge">
        ${product.badge}
        </span>
        `
        :
        ""}



        <h3>
        ${product.name}
        </h3>



        ${product.rating ?

        `
        <p class="rating">

        <span class="stars">

        ${generateStars(product.rating)}

        </span>


        <span class="rating-number">

        ${product.rating}
        (${product.reviews})

        </span>

        </p>
        `

        :

        ""
        }



        <p class="card-desc">
        ${product.description}
        </p>




        <a 
        href="${product.affiliate}"
        target="_blank">

        Shop Now →

        </a>



        `;



        productContainer.appendChild(card);



    });


}




function searchProducts(keyword){

    const searchValue =
    keyword.toLowerCase().trim();


    const result =
    currentProducts.filter(product => {

        return (

            product.code
            .toLowerCase()
            .includes(searchValue)

            ||

            product.name
            .toLowerCase()
            .includes(searchValue)

        );

    });


    if(result.length === 0){

        productContainer.innerHTML = `

        <div class="empty-state">

            <h3>
            No Products Found
            </h3>

            <p>
            We couldn't find any products matching your search.
            Try another keyword 🔍
            </p>

        </div>

        `;

        return;

    }


    renderProducts(result);

}




function generateStars(rating){

    const fullStars =
    Math.floor(rating);


    let stars="";


    for(
        let i=0;
        i<fullStars;
        i++
    ){

        stars += "★";

    }


    while(stars.length < 5){

        stars += "☆";

    }


    return stars;

}




if(searchInput){

    searchInput.addEventListener(
        "input",
        (e)=>{

            const keyword =
            e.target.value;

            searchProducts(keyword);

            if(keyword.trim()){

                clearSearch.classList.add("show");

            }else{

                clearSearch.classList.remove("show");

            }

        }
    );

}




if(clearSearch){

    clearSearch.addEventListener(
        "click",
        ()=>{

            searchInput.value = "";

            clearSearch.classList.remove("show");

            renderProducts(currentProducts);

            searchInput.focus();

            if(window.activateAnimation){

                setTimeout(()=>{

                    activateAnimation();

                },100);

            }

        }
    );

}




loadCollection().then(()=>{

    if(window.activateAnimation){

        setTimeout(()=>{

            activateAnimation();

        },200);

    }

});