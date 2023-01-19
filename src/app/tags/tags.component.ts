import { FoodService } from './../services/Food/food.service';
import { Component, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {



  foodPageTags?:string[];

  tags?: Tag[];
  constructor(private foodService: FoodService) {}
  ngOnInit(): void {
    if(!this.foodPageTags)
    this.tags = this.foodService.getAllTags();
  }
}
