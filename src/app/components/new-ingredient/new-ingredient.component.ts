import { Component, OnInit} from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-ingredient',
  templateUrl: './new-ingredient.component.html',
  styleUrls: ['./new-ingredient.component.css']
})
export class NewIngredientComponent implements OnInit{
  nazwasklad:string;
  kalorie:string;
  showMsg: boolean = false;
  showErr:boolean = false;

  constructor(private api:ApiServiceService){}

  ngOnInit():void{}

  dodaj(){
    if(this.nazwasklad != undefined && this.kalorie != undefined){
    this.api.addSkladnik(this.nazwasklad, this.kalorie).subscribe({
      next:(response)=> {console.log(response)},
      error:(err)=> {console.log(err)  
      this.showErr = true;
      },
      complete:()=> {console.log()
          this.nazwasklad = undefined;
          this.kalorie = undefined;
          this.showMsg= true;
  }
    })
  }else{
   this.showErr = true;   
  }
}
    
}
