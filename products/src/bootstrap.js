import faker from 'faker';

const mount = (el) => {
    let products = '';
    for (let i = 0; i < 3; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }
    el.innerHTML = products;
}

if (process.env.NODE_ENV === 'develpoment') {
    const el = document.querySelector('#products-list')
    if(el) {
        mount(el);
    }
}

export {mount};