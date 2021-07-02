import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Test', 'https://images.pexels.com/photos/4346328/pexels-photo-4346328.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'),
    new Recipe('2nd Recipe', 'Test 2 ', 'https://images.pexels.com/photos/4346328/pexels-photo-4346328.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'),
    new Recipe('2nd Recipe', 'Test 2 ', 'https://images.pexels.com/photos/4346328/pexels-photo-4346328.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'),
    
    

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
