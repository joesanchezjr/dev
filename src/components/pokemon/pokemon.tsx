import React from "react";
import { Pokemon, PokemonSpecies } from "pokenode-ts";
import { PokemonProvider } from "@/components/pokemon/pokemon-context";
import PokemonDisplay from "@/components/pokemon/pokemon-display";
import PokemonRandomButton from "@/components/pokemon/pokemon-random-button";

async function getRandomPokemon() {
  const randomPokemonId = Math.floor(Math.random() * 1017) + 1;
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${randomPokemonId}`
    );
    const species = await res.json();
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`
      );
      const pokemon = await res.json();
      return { species, pokemon } as {
        species: PokemonSpecies;
        pokemon: Pokemon;
      };
    } catch (error) {
      console.error(error);
      throw new Error("Unable to fetch pokemon data");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Unable to fetch pokemon data");
  }
}

export default async function Pokemon() {
  const { pokemon, species } = await getRandomPokemon();
  return (
    <PokemonProvider data={{ pokemon, species }}>
      <div className="flex flex-col">
        <PokemonDisplay />
        <PokemonRandomButton />
      </div>
    </PokemonProvider>
  );
}
