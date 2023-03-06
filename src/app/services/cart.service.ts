import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Foods } from 'src/app/shared/models/food';
import { FoodService } from './food/food.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(food: Foods): void {
    let cartItem = this.cart.items.find((item) => item.food.id === food.id);
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }

    this.cart.items.push(new CartItem(food));
    localStorage.setItem('items', JSON.stringify(this.cart.items)); //items added to localstorage cartItem array
  }

  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter((item) => item.food.id != foodId);
    // const index = this.cart.items.indexOf(food); //localstorage remove from cartItem
    // this.cart.items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(this.cart.items));
  }

  changeQuantity(foodId: number, quantity: number) {
    let cartItem = this.cart.items.find((item) => item.food.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity; //quantity
    localStorage.setItem('items', JSON.stringify(this.cart.items));
  }

  getCart(): Cart {
    // const items = JSON.parse(localStorage.getItem('items'));
    // return items;
    localStorage.clear();
    return this.cart;
  }
}
