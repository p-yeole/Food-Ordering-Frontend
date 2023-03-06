import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFoodById(id: number): Foods {
    return this.getAll().find((food) => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm: string): Foods[] {
    return this.getAll().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getAllFoodByTag(tag: string): Foods[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));

    // if (tag == 'All') return this.getAll();
    // else return this.getAll().filter((food) => food.tags?.includes(tag));
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 10 },
      { name: 'snacks', count: 6 },
      { name: 'lunch', count: 3 },
      { name: 'dinner', count: 3 },
      { name: 'veg', count: 7 },
      { name: 'non veg', count: 2 },
    ];
  }

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
        price: 190, //rupees
        // favourite: true,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: './assets/burger extreme.jpg',
        tags: ['snacks', 'veg'],
      },

      {
        id: 3,
        name: 'Veg Burger Combo',
        cookTime: '10-15mins',
        price: 250, //dollars
        // favourite: false,
        origins: ['Italy'],
        star: 3.8,
        imageUrl: '/assets/burger2.jpg',
        tags: ['snacks', 'veg'],
      },
      {
        id: 4,
        name: 'Chicken Tikka',
        cookTime: '10-15mins',
        price: 320, //dollars
        // favourite: false,
        origins: ['Indian'],
        star: 3,
        imageUrl: '/assets/chicken tikka.jpg',
        tags: ['lunch', 'dinner', 'non veg'],
      },

      {
        id: 6,
        name: 'Chicken Loaded Pizza',
        cookTime: '10-15mins',
        price: 300, //dollars
        // favourite: false,
        origins: ['India'],
        star: 4,
        imageUrl: '/assets/non veg pizza.jpg',
        tags: ['lunch', 'dinner', 'non veg'],
      },
      {
        id: 2,
        name: 'American Cheese Supreme',
        cookTime: '10-15mins',
        price: 170, //dollars
        // favourite: false,
        origins: ['America'],
        star: 3.5,
        imageUrl: '/assets/burger.jpg',
        tags: ['snacks', 'veg'],
      },
      {
        id: 7,
        name: 'Paneer Tikka',
        cookTime: '10-15mins',
        price: 160, //dollars
        // favourite: true,
        origins: ['Italy'],
        star: 4.8,
        imageUrl: '/assets/paneer tikka.jpg',
        tags: ['snacks', 'veg'],
      },
      {
        id: 8,
        name: 'Starter Combo',
        cookTime: '10-15mins',
        price: 200, //dollars
        // favourite: false,
        origins: ['Italy'],
        star: 2.9,
        imageUrl: '/assets/starters1.jpg',
        tags: ['snacks', 'veg'],
      },
      {
        id: 9,
        name: 'Pink Sauce pasta',
        cookTime: '10-15mins',
        price: 180, //dollars
        // favourite: false,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: '/assets/veg pasta.jpg',
        tags: ['snacks', 'veg'],
      },
      {
        id: 10,
        name: '7 Cheese Pizza',
        cookTime: '10-15mins',
        price: 250, //dollars
        // favourite: false,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: '/assets/veg pizza.jpg',
        tags: ['lunch', 'dinner', 'veg'],
      },
    ];
  }
}
