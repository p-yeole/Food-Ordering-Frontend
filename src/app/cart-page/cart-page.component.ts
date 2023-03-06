import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Foods } from '../shared/models/Food';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  // value = 1;
  constructor(
    private cartService: CartService,
    private foodService: FoodService
  ) {
    let foods = foodService.getAll(); //to be removed
    // cartService.addToCart(foods[1]); //to be removed
    // cartService.addToCart(foods[3]); //to be removed
    // cartService.addToCart(foods[5]); //to be removed
    this.setCart();
  }
  ngOnInit(): void {}

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    // const items = JSON.parse(localStorage.getItem('items'));

    const quantity = parseInt(quantityInString);
    // items.forEach((item) => {
    //   const selectElement = document.getElementById(`select-${item.id}`);
    //   selectElement.value = item.quantity;
    // });
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }

  // onSubmit() {
  //   window.alert(
  //     'Thanks for placing the order. Your Order will be delivered shortly. Please pay in cash!!'
  //   );
  //   //write code to empty cart items on click of this button
  // }
}
