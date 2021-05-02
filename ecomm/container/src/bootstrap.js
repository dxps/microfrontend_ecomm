import { mount as mountProducts } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartShow';

console.log('Container Bootstrap');

mountProducts(document.querySelector('#my-products'));
mountCart(document.querySelector('#my-cart'));
