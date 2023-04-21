import { Type } from './../Model/Type';
import { Pokemon } from './../Model/Pokemon';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public pokemons: Pokemon[] = [];

  constructor(
    private httpClient: HttpClient,
  ){
    const allPokemonsURL = 'https://pokeapi.co/api/v2/pokemon/';
    this.httpClient.get<any>(allPokemonsURL).pipe(
      map(value => value.results),
      map((value: any) => {
        return from(value).pipe(
          mergeMap((v: any) => this.httpClient.get(v.url))
        );
      }),
      mergeMap(value => value),
    ).subscribe((results: any) => this.pokemons[results.id] = {
      image: results.sprites.front_default,
        number: results.id,
        name: results.name,
        types: results.types.map(t => t.Type.name),

    });
  }
}
