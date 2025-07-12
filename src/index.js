import createItem from "./services/item.js";   
import * as cartService from "./services/cart.js";

const myCart = [];

console.log("Bem vindo ao seu carrinho de compras da Shopee!");

const item1 = await createItem("Samsung galaxy s24", 4000, 3);
const item2 = await createItem("Echo Dot - ultima geração", 499, 1);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item1);
// await cartService.removeItem(myCart, item1);

await cartService.displayCart(myCart);

// await cartService.deleteItem(myCart, item1.name);
// await cartService.deleteItem(myCart, item2.name);



await cartService.calculateTotal(myCart);