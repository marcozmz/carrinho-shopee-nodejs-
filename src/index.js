import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWhishList = [];

console.log("\nBem vindo ao seu carrinho!");

const item1 = await createItem("hotweels ferrari", 20.99, 1);
const item2 = await createItem("hotweels lamborguini", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// await cartService.removeItem(myCart, 1);

// await cartService.deleteItem(myCart, item2.name);

await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);