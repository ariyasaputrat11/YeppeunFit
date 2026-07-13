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


        collectionImage.alt =
        category.name;



        collectionTitle.textContent =
        category.name;



        collectionSubtitle.textContent =
        category.subtitle;




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



        renderProducts(filteredProducts);



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

        <p>
        No products available in this collection.
        </p>

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



        <p class="price">
        Rp${product.price.toLocaleString("id-ID")}
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




loadCollection().then(()=>{

    if(window.activateAnimation){

        setTimeout(()=>{

            activateAnimation();

        },200);

    }

});