import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './components/component1/component1.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login-guard.guard';
import { MyRecipesComponent } from './components/my-recipes/my-recipes.component';
import { AllRecipesComponent } from './components/all-recipes/all-recipes.component';
import { NewRecipeComponent } from './components/new-recipe/new-recipe.component';
import { NewIngredientComponent } from './components/new-ingredient/new-ingredient.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  },
  {
    path:'component1',
    component:Component1Component,
    canActivate: [LoginGuard]
  },
  {
    path:'homepage',
    component:HomePageComponent,
    canActivate: [LoginGuard]
  },
  {
    path:'newgame',
    component:NewGameComponent,
    canActivate: [LoginGuard]
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
    
  },
  {
    path:'myrecipes',
    component:MyRecipesComponent,
    canActivate: [LoginGuard]
  },
  {
    path:'allrecipes',
    component:AllRecipesComponent,
    canActivate: [LoginGuard]
  },
  {
    path:'newrecipe',
    component:NewRecipeComponent,
    canActivate: [LoginGuard]
  },
  {
    path:'newingredient',
    component:NewIngredientComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
