import faker from 'faker';

const mount = (el) => {
    const cartText = `<div> you have ${faker.random.number()} items in your cart.`;
    el.innerHTML = cartText;
}

if (process.env.NODE_ENV === 'develpoment') {
    const el = document.querySelector('#cart-dev').innerHTML = cartText;
    if(el) {
        el.innerHTML = cartText;
    }
}

export {mount}


