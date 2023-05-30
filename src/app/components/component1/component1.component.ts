import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { infoGry, infoUser } from 'src/app/interfaces/interfejsy';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalService } from 'src/app/services/modal-service.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component{
  
infoList:infoGry[]
thumbnail: any;
searchText: string;
infoListFiltered:infoGry[]

constructor(private api:ApiServiceService, private sanitizer:DomSanitizer, protected modalService: ModalService){
  let user:infoUser = JSON.parse(sessionStorage.getItem('user'))
  this.api.getData(user.idusers_game).subscribe({
    next:(response)=> {
      console.log(response)
      for (let i = 0; i < response.length; i++) {
      
        console.log(response[i].id_gry, response[i].tytul, response[i].producent,response[i].rok_wydania, response[i].gatunek, response[i].image, response[i].kraj, response[i].ocena, response[i].wlasna_opinia)
      }
      
      this.infoList = response
      this.infoListFiltered = response      
    }
  })
}

Update(gameInfo:infoGry){
  this.api.updateData(gameInfo).subscribe({
  })
  this.modalService.close()
}

filtruj(){
  this.infoListFiltered = this.infoList.filter(gra=>
    (this.searchText=='' || gra.tytul!=undefined && gra.tytul.toString().toLowerCase().includes(this.searchText))
    )
  }
  
}