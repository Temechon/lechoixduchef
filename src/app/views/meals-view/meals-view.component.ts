import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Meal } from '../../model/meal.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-meals-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './meals-view.component.html',
  styleUrl: './meals-view.component.scss'
})
export class MealsViewComponent {

  filteredMeals: Array<Meal> = [];

  constructor(private db: DatabaseService, private router: Router) {

  }

  toggleCategory(categ: string, event: any) {

  }

  ngOnInit() {
    // Retrieve all meals from database
    this.db.getAllMeals().subscribe(data => {
      this.filteredMeals = data;
    })

  }

  openMeal(meal: Meal) {
    return this.router.navigate(['/meals', meal.id]);
  }

}
