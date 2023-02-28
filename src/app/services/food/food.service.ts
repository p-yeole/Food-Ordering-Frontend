import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): Foods[] {
    //
    return [
      // '/assets/burger extreme.jpg',
      // '/assets/burger.jpg',
      // '/assets/burger2.jpg',
      // '/assets/chicken tikka.jpg',
      // '/assets/non veg pasta.jpg',
      // '/assets/non veg pizza.jpg',

      // '/assets/paneer tikka.jpg',
      // '/assets/starters1.jpg',
      // '/assets/veg pasta.jpg',
      // '/assets/veg pizza.jpg',
      {
        id: 1,
        name: 'Mac n Cheese',
        cookTime: '10-15mins',
        price: 9, //dollars
        favourite: true,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: './assets/burger extreme.jpg',
        tags: ['FastFood', 'Burger', 'Snacks', 'Veg'],
      },

      {
        id: 3,
        name: 'Veg Burger Combo',
        cookTime: '10-15mins',
        price: 6, //dollars
        favourite: false,
        origins: ['Italy'],
        star: 3.8,
        imageUrl: '/assets/burger2.jpg',
        tags: ['FastFood', 'Burger', 'Fries', 'Snacks', 'Cheese', 'Non Veg'],
      },
      {
        id: 4,
        name: 'Chicken Tikka',
        cookTime: '10-15mins',
        price: 15, //dollars
        favourite: false,
        origins: ['Indian'],
        star: 3,
        imageUrl: '/assets/chicken tikka.jpg',
        tags: ['Lunch', 'Dinner', 'Chicken', 'Main course', 'Non Veg'],
      },

      {
        id: 6,
        name: 'Chicken Loaded Pizza',
        cookTime: '10-15mins',
        price: 15, //dollars
        favourite: false,
        origins: ['India'],
        star: 4,
        imageUrl: '/assets/non veg pizza.jpg',
        tags: ['FastFood', 'Pizza', 'Non Veg', 'Cheese'],
      },
      {
        id: 2,
        name: 'American Cheese Supreme',
        cookTime: '10-15mins',
        price: 7, //dollars
        favourite: false,
        origins: ['America'],
        star: 3.5,
        imageUrl: '/assets/burger.jpg',
        tags: ['FastFood', 'Burger', 'Snacks', 'Cheese', 'Veg'],
      },
      {
        id: 7,
        name: 'Paneer Tikka',
        cookTime: '10-15mins',
        price: 10, //dollars
        favourite: true,
        origins: ['Italy'],
        star: 4.8,
        imageUrl: '/assets/paneer tikka.jpg',
        tags: ['FastFood', 'Starter', 'Snacks', 'Paneer', 'Veg'],
      },
      {
        id: 8,
        name: 'Starter Combo',
        cookTime: '10-15mins',
        price: 20, //dollars
        favourite: false,
        origins: ['Italy'],
        star: 2.9,
        imageUrl: '/assets/starters1.jpg',
        tags: ['FastFood', 'Starter', 'Snacks', 'Veg'],
      },
      {
        id: 9,
        name: 'Pink Sauce pasta',
        cookTime: '10-15mins',
        price: 13, //dollars
        favourite: false,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: '/assets/veg pasta.jpg',
        tags: ['FastFood', 'Pasta', 'Snacks', 'Cheese', 'Veg'],
      },
      {
        id: 10,
        name: '7 Cheese Pizza',
        cookTime: '10-15mins',
        price: 25, //dollars
        favourite: false,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: '/assets/veg pizza.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch', 'Dinner', 'Veg'],
      },
    ];
  }
}
