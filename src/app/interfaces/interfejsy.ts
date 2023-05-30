export interface infoGry{
    id_gry:number;
    tytul:string;
    producent:string;
    gatunek:string;
    rok_wydania:string;
    image:string;
    kraj:string;
    ocena:string;
    wlasna_opinia:string;
    user_id:number;
}

export interface skladniki{
    id:number;
    nazwaSklad:string;
    kalorie:string;
    ilosc?:string;
}

export interface wyswietlWszystko{
    id:number;
    nazwa:string;
    obraz:File;
    kategoria:string;
    przygotowanie:string;
    id_users:number;
    ocena:string;
    iloscPorcji:number;
    skladniki:skladniki[];
}

export interface skladnikiDTO{
    id_skladnika:number;
    ilosc:string;
}

export interface infoprzepis{
    id:number;
    nazwa:string;
    obraz:File;
    kategoria:string;
    przygotowanie:string;
    ocena:string;
    id_users:number;
}

export interface przepisDTO{
    nazwa:string;
    obraz:File;
    kategoria:string;
    przygotowanie:string;
    iloscPorcji:number;
    id_users:number;
    skladniki:skladnikiDTO[];
}

export interface infoUser{
    idusers_game:number;
    login:string;
    password:string;
    iloscPrzepis:number;
}