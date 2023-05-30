import { Component,OnInit } from '@angular/core';
import { infoUser, skladniki, skladnikiDTO } from 'src/app/interfaces/interfejsy';
import { ApiServiceService } from 'src/app/services/api-service.service';
import{Observable} from 'rxjs'
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { przepisDTO } from 'src/app/interfaces/interfejsy';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})

export class NewRecipeComponent implements OnInit{
  nazwa:string
  obraz:File
  kategoria:string
  przygotowanie:string
  listaskladnikowDTO:skladnikiDTO[] = []
  showMsg: boolean = false;
  showErr:boolean = false;
  fileName:string;
  iloscPorcji:number;
  listaskladnikow:skladniki[]
  thumbnail:any
  wybranesklad:skladniki[] = []

  constructor(private api:ApiServiceService, private router:Router){
    this.api.getSkladnik().subscribe({
      next:(response) =>{
        for(let i = 0; i < response.length; i++){
          response[i].ilosc="";
          console.log(response[i].nazwaSklad, response[i].kalorie)
        }
        this.listaskladnikow = response
      }
    })
  }
  
  zapisz(){
  if (this.nazwa != undefined,this.obraz != undefined, this.kategoria != undefined, this.przygotowanie != undefined, this.wybranesklad != undefined) {
    for(let i = 0; i < this.wybranesklad.length; i++){
      let skladnikDTO:skladnikiDTO = {
        id_skladnika:this.wybranesklad[i].id,
        ilosc:this.wybranesklad[i].ilosc
      }
      this.listaskladnikowDTO.push(skladnikDTO)
  }
  let user:infoUser = JSON.parse(sessionStorage.getItem('user'))
  let przepisDTO:przepisDTO = {
    nazwa:this.nazwa,
    kategoria:this.kategoria,
    obraz:this.obraz,
    iloscPorcji:this.iloscPorcji,
    przygotowanie:this.przygotowanie,
    id_users:user.idusers_game,
    skladniki:this.listaskladnikowDTO
  }
  console.log(przepisDTO.obraz)
  this.api.addRecipe(przepisDTO).subscribe({
    next:(response)=> {console.log(response)},
    error:(err)=> {console.log(err)  
    this.showErr = true;
    },
    complete:()=> {console.log()
      this.api.addZdj(this.nazwa, this.obraz, user.idusers_game).subscribe({
        next:(response)=> {console.log(response)},
        error:(err)=> {console.log(err)  
          this.showErr = true;
        },
        complete:()=> {console.log()
          this.nazwa = undefined;
          this.obraz = undefined;
          this.kategoria = undefined;
          this.przygotowanie = undefined;
          this.wybranesklad = undefined;
          this.fileName = undefined;
          this.iloscPorcji = undefined;
          this.showMsg= true;
        }
      })        
}
  })
}
    
  }

  onChange(event){
    this.obraz = event.target.files[0];
    this.fileName = this.obraz.name;
  }
  
  onSelect(){
    console.log(this.wybranesklad)
  }

  ngOnInit(): void {
    
  }

  addIngredient(){
    this.router.navigate(['/newingredient'])
  }
   
}