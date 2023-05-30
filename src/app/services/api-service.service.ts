import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewGameComponent } from '../components/new-game/new-game.component';
import{Observable} from 'rxjs'
import { HomePageComponent } from '../components/home-page/home-page.component';
import { infoGry, infoUser, przepisDTO, skladnikiDTO, wyswietlWszystko } from '../interfaces/interfejsy';
import { Component1Component } from '../components/component1/component1.component';
import { skladniki } from '../interfaces/interfejsy';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'Application/json',
      Observe:'response' as 'response'
    })
  }
  constructor(private http: HttpClient) { }
  polaczenie = 'http://localhost:5000'
  odebranieAll = 'http://localhost:5000/all/'
  logowanie = 'http://localhost:5000/login'
  rejestracja = 'http://localhost:5000/register'
  dodajprzepis = 'http://localhost:5000/dodaj'
  wezskladnik = 'http://localhost:5000/skladniki'
  dodajskladnik = 'http://localhost:5000/dodajskladnik'
  dodajzdj = 'http://localhost:5000/aktualizujzdj'
  wszystkiePrzepisy = 'http://localhost:5000/wszystko'
  wszystkiePrzepisyUser = 'http://localhost:5000/wszystkouser/'
  aktualizujocena = 'http://localhost:5000/ocena'


  addNewGame(title:string,wydawca:string,kiedy:string, typ:string, krajWyd:string, plik:File, idusers_game:number):Observable<String>{
    var data = new FormData();
    data.append("tytul", title);
    data.append("producent", wydawca);
    data.append("rok_wydania", kiedy);
    data.append("gatunek", typ);
    data.append("image", plik);
    data.append("kraj", krajWyd);
    data.append("user_id", idusers_game.toString())
    return this.http.post<String>(this.polaczenie,data)
  }

   addRecipe(przepisDTO):Observable<String>{
    return this.http.post<String>(this.dodajprzepis, przepisDTO)
   }

   addZdj(nazwa:string, obraz:File, id_users:number):Observable<String>{
    var data = new FormData();
    data.append("nazwa", nazwa)
    data.append("obraz", obraz)
    data.append('id_users', id_users.toString())
    return this.http.post<String>(this.dodajzdj, data)
   }

  getSkladnik():Observable<skladniki[]>{
    return this.http.get<skladniki[]> (this.wezskladnik)
  }

  updateOcena(ocena:wyswietlWszystko):Observable<wyswietlWszystko[]>{
    let user:infoUser = JSON.parse(sessionStorage.getItem('user'))
    return this.http.put<wyswietlWszystko[]>(this.aktualizujocena + '/' + ocena.id + '?ocena=' + ocena.ocena + '&id_uzyt=' + user.idusers_game, '')
  }

  getPrzepis():Observable<wyswietlWszystko[]>{
    return this.http.get<wyswietlWszystko[]> (this.wszystkiePrzepisy)
  }

  getPrzepisUser(idUser:number):Observable<wyswietlWszystko[]>{
    return this.http.get<wyswietlWszystko[]> (this.wszystkiePrzepisyUser + idUser)
  }

  addSkladnik(nazwasklad:string, kalorie:string):Observable<String>{
    var data = new FormData();
    data.append("nazwaSklad", nazwasklad);
    data.append("kalorie", kalorie);
    return this.http.post<String>(this.dodajskladnik, data)
  }
   
  getData(idUser:number):Observable<infoGry[]>{
    return this.http.get<infoGry[]> (this.odebranieAll + idUser)
  }

  updateData(gameInfo:infoGry):Observable<String>{
    var data = new FormData();
    data.append('tytul',gameInfo.tytul)
    data.append('producent',gameInfo.producent)
    data.append('rok_wydania', gameInfo.rok_wydania)
    data.append('gatunek', gameInfo.gatunek)
    data.append('kraj', gameInfo.kraj)
    data.append('obraz', '')
    data.append('ocena', gameInfo.ocena)
    data.append('wlasna_opinia', gameInfo.wlasna_opinia)
    return this.http.put<String>(this.polaczenie + '/' + gameInfo.id_gry, data)
  }

  newUser(login:string, password:string):Observable<String>{
    var data = new FormData();
    data.append('login', login)
    data.append('password', password)
    return this.http.post<String>(this.rejestracja, data)
  }

  loginUser(login1:string, password1:string):Observable<infoUser>{
    var data = new FormData();
    data.append('login', login1)
    data.append('password', password1)
    return this.http.post<infoUser>(this.logowanie, data)
  }
}