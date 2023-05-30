import { Component } from '@angular/core';
import { infoprzepis, przepisDTO, wyswietlWszystko } from 'src/app/interfaces/interfejsy';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ModalService } from 'src/app/services/modal-service.service';


@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent {

  listaAll:wyswietlWszystko[]
  searchText: string;
  listaAllFiltered:wyswietlWszystko[]
  lacznekalorie:number = 0;
  searchTextkat:string;
  


  constructor(private api:ApiServiceService, protected modalService: ModalService){
    this.api.getPrzepis().subscribe({
      next:(response)=>{
        //console.log(response)
        for(let i = 0; i<response.length; i++){
          console.log(response[i].id,response[i].nazwa, response[i].obraz, response[i].kategoria, response[i].przygotowanie,response[i].skladniki, response[i].ocena, response[i].iloscPorcji)
        }
        this.listaAll = response
        this.listaAllFiltered = response
      }
    })
  }

  obliczKalorie(zmienna:wyswietlWszystko){
    this.lacznekalorie = 0
    for(let i = 0; i< zmienna.skladniki.length; i++){
      let skladnik = zmienna.skladniki[i]
      let ilosc = (Number(skladnik.ilosc.replace('g', '')) / 100)
      let kalorycznosc =  Number(skladnik.kalorie.replace(' ','').replace(',', '.').replace('kcal/100g', ''))
      this.lacznekalorie += ilosc * kalorycznosc / zmienna.iloscPorcji
      this.lacznekalorie = Math.floor(this.lacznekalorie)
    }
  }

  Update(ocena:wyswietlWszystko){
    this.api.updateOcena(ocena).subscribe({
    })
    this.modalService.close()
  }

  filtruj(){
    this.listaAllFiltered = this.listaAll.filter(danie=>
      (this.searchText=='' || danie.nazwa!=undefined && danie.nazwa.toString().toLowerCase().includes(this.searchText))
      )
    }

    filtrujkat(){
      this.listaAllFiltered = this.listaAll.filter(kategoria=>
        (this.searchTextkat=='' || kategoria.kategoria!=undefined && kategoria.kategoria.toString().toLowerCase().includes(this.searchTextkat))
        )
      }

}

