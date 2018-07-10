import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipes} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipes>();
  recipes: Recipes[] = [
    new Recipes('Test1', 'testing purpose', 'https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F11%2F04%2Ffettuccine-olive-oil-ck-x.jpg%3Fitok%3DN9u99OOY&w=800&q=85'),
    new Recipes('Test2', 'testing purpose', 'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg')

  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipes) {
    this.recipeWasSelected.emit(recipe);
  }
}
