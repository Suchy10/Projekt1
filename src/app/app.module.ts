import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu'; 
import {MatButtonModule, MatIconAnchor} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './components/component1/component1.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { ModalComponent } from './components/modal/modal.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login-guard.guard';
import { NewRecipeComponent } from './components/new-recipe/new-recipe.component';
import { AllRecipesComponent } from './components/all-recipes/all-recipes.component';
import { MyRecipesComponent } from './components/my-recipes/my-recipes.component';
import {MatSelectModule} from '@angular/material/select';
import { NewIngredientComponent } from './components/new-ingredient/new-ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    HomePageComponent,
    NewGameComponent,
    ModalComponent,
    LoginComponent,
    RegisterComponent,
    NewRecipeComponent,
    AllRecipesComponent,
    MyRecipesComponent,
    NewIngredientComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class MatMenuListItem {
  menuLinkText: string;
  menuIcon: string;
  isDisabled: boolean;
}
