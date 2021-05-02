import faker from 'faker';


// This function gets a reference to an HTML `el`ement and
// sets its inner content with the constructed list of products.
const mount = (el) => {
    let products = '';

    for (let i=0; i<3; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`
    }
    
    el.innerHTML = products;
}

// If this code runs in isolation (development) mode, and not through the container.
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');
    // Ofc, this assumes that container part does not have an element with this id.
    if (el) {
        // Since we are running in isolation, let's mount it.
        mount(el);
    }
}

export { mount };
