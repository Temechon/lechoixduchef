import { Routes } from '@angular/router';

import { DishListViewComponent } from './views/dish-list-view/dish-list-view.component';
import { DishViewComponent } from './views/dish-view/dish-view.component';
import { IngredientViewComponent } from './views/ingredient-view/ingredient-view.component';
import { MenuListComponent } from './views/menulist/menu-list/menu-list.component';
import { WeekViewComponent } from './views/menulist/week-view/week-view.component';
import { ShopListViewComponent } from './views/shop-list-view/shop-list-view.component';

export const routes: Routes = [
    {
        path: "home",
        component: MenuListComponent,
    },
    {
        path: "week",
        children: [
            {
                path: "",
                pathMatch: 'full',
                redirectTo: "/home"
            },
            {
                path: ":weekid",
                children: [
                    {
                        path: "",
                        component: WeekViewComponent,
                    },
                    {
                        path: ':dayid',
                        children: [
                            {
                                path: 'lunch',
                                component: DishListViewComponent,
                                data: { mode: 'select', mealType: 'lunch' }
                            },
                            {
                                path: 'dinner',
                                component: DishListViewComponent,
                                data: { mode: 'select', mealType: 'dinner' }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        path: "meals",
        children: [
            {
                path: "",
                component: DishListViewComponent,
                data: { mode: 'edit' }
            },
            {
                path: ":id",
                children: [
                    {
                        path: "",
                        component: DishViewComponent
                    }
                ]
            }
        ]
    },
    {
        path: "ingredient",
        children: [
            {
                path: "",
                component: IngredientViewComponent
            },
            {
                path: ":iding",
                component: IngredientViewComponent
            }
        ]
    },
    {
        path: "shoppinglist",
        component: ShopListViewComponent
    },
    {
        path: "**",
        redirectTo: "home"
    }
];
