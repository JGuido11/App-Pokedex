import { Component } from '@angular/core';
import { Type } from 'src/Model/Type';
import { Pokemon } from 'src/Model/Pokemon';
import { PokemonService } from 'src/Service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent {
  constructor(
    public pokemonService: PokemonService
  ){

  }
}
