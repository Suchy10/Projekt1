import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  constructor(private router:Router){}
  ngOnInit(): void {
    
  }
  myrecipe():void {
    this.router.navigate(['/myrecipes'])
  }
  newrecipe():void{
    this.router.navigate(['/newrecipe'])
  }
  allrecipe():void{
    this.router.navigate(['/allrecipes'])
  }
}


