import { CartService } from './../services/cart/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from './../shared/models/Food';
import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/Food/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent implements OnInit {
  food!: Food;
  origin: any;
  constructor(
    private foodservice: FoodService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) this.food = foodservice.getFoodById(params['id']);
    });
  }

  ngOnInit(): void {}

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('cart-page');
  }
}
