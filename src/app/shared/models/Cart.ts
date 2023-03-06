import { CartItem } from './CartItem';
import { Foods } from './Food';

export class Cart {
  // items: CartItem[] = [];

  items: CartItem[];
  localItem: string;
  constructor() {
    //constructor implemented for localStorage cart only
    this.localItem = localStorage.getItem('items');
    if (this.localItem == null) {
      this.items = [];
    } else {
      this.items = JSON.parse(this.localItem);
    }
  }

  get totalPrice(): number {
    //const line for getting total price from localstorage cart items
    const items = JSON.parse(localStorage.getItem('items')) || [];

    let totalPrice = 0;
    this.items.forEach((item) => {
      totalPrice += item.quantity * item.price;
    });
    console.log(totalPrice);
    localStorage.setItem('items', JSON.stringify(this.items)); //items added to localstorage cartItem array
    return totalPrice;
  }

  get totalQuantity(): number {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    let total_quantity = 0;
    this.items.forEach((item) => {
      total_quantity += item.quantity;
    });
    console.log(total_quantity);
    localStorage.setItem('items', JSON.stringify(this.items)); //items added to localstorage cartItem array
    return total_quantity;
  }
}
