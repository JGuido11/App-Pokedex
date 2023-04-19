import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, map } from 'rxjs';
import { Pokemon } from 'src/Model/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public pokemon = new ReplaySubject<Pokemon[]>(1);

  constructor(
    private httpClient: HttpClient,
  ){
    const allPokemonsURL = 'https://pokeapi.co/api/v2/pokemon/';
    this.httpClient.get<any>(allPokemonsURL).pipe(
      map(value => value.results)
    ).subscribe(this.pokemon);
  }
}
