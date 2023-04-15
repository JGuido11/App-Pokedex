import { Component } from '@angular/core';
import { Type } from 'src/Model/Type';
import { Pokemon } from 'src/Model/Pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent {
  public pokemons: Pokemon[] = [
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      number: 1,
      name: 'Bulbasour',
      types: [
        Type.Grass,
        Type.Poison
      ],
    }
  ];
}
