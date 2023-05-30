import { Component, OnInit } from '@angular/core';
import { infoUser } from 'src/app/interfaces/interfejsy';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit{
  tytul:string;
  Producent:string;
  rokWyd:string;
  Gatunek:string;
  kraj:string;
  obraz: File;
  fileName:string;
  showMsg: boolean = false;
  showErr:boolean = false;
  constructor(private odbior:ApiServiceService){}
  ngOnInit(): void {
  }
  zapisz(){
    let user:infoUser = JSON.parse(sessionStorage.getItem('user'))
    this.odbior.addNewGame(this.tytul,this.Producent,this.rokWyd,this.Gatunek,this.kraj, this.obraz,user.idusers_game).subscribe({
      next:(response)=> {console.log(response)},
      error:(err)=> {console.log(err)  
      this.showErr = true;
      },
      complete:()=> {console.log()
          this.tytul = undefined;
          this.Producent = undefined;
          this.rokWyd = undefined;
          this.Gatunek = undefined;
          this.kraj = undefined;
          this.obraz = undefined;
          this.fileName = undefined;
          this.showMsg= true;
  }
    })
  }

  

  onChange(event){
    this.obraz = event.target.files[0];
    this.fileName = this.obraz.name;
  }
  
}

