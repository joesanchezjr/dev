"use client";

import React from "react";
import Image from "next/image";
import { usePokemon } from "@/app/pokemon-context";

export default function PokemonDisplay() {
  const { state } = usePokemon();

  const selectedPokemon = state.current;

  const pokemonName =
    selectedPokemon.species.names.find((name) => name.language.name === "en")
      ?.name || selectedPokemon.species.names[0].name;

  const pokemonImage =
    selectedPokemon.pokemon.sprites.front_default ||
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png";

  return (
    <div className="flex flex-col items-center">
      <Image src={pokemonImage} alt={pokemonName} width={96} height={96} />
      <h2>{pokemonName}</h2>
    </div>
  );
}
