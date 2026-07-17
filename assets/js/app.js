console.log("Yeppeun Hub Loaded ✨");

// Homepage saat ini menggunakan collection card
// yang sudah ditulis langsung di index.html.
// Product akan dimuat di collection.html.

console.log("Homepage Ready");

async function loadProductCount(){

    const response = await fetch(
        "data/products.json"
    );

    const products = await response.json();


    document
    .querySelectorAll(".product-total")
    .forEach(counter=>{


        const category =
        counter.dataset.category;


        const total =
        products.filter(product =>
            product.category === category &&
            product.active === true
        ).length;


        counter.textContent =
        `${total} Products`;


    });

}


loadProductCount();