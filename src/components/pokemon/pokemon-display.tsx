"use client";

import React from "react";
import Image from "next/image";
import { usePokemon } from "@/components/pokemon/pokemon-context";

const formatPokemonId = (id: number, padding: number = 4) => {
  return id.toString().padStart(padding, "0");
};

export default function PokemonDisplay() {
  const { state } = usePokemon();

  const selectedPokemon = state.current;

  const pokemonName =
    selectedPokemon.species.names.find((name) => name.language.name === "en")
      ?.name || selectedPokemon.species.names[0].name;

  const pokemonImage =
    selectedPokemon.pokemon.sprites.front_default ||
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png";

  const pokemonId = formatPokemonId(selectedPokemon.species.id);

  return (
    <div
      className="flex flex-col border-2 rounded p-2 pt-6 relative"
      style={{ borderColor: selectedPokemon.species.color.name }}
    >
      <div className="absolute top-0 right-0 py-1 px-2  font-mono text-sm">{`#${pokemonId}`}</div>
      <Image
        src={pokemonImage}
        alt={pokemonName}
        width={96}
        height={96}
        className="self-center"
      />
      <div className="flex justify-between items-center">
        <h3 className="font-bold">{pokemonName}</h3>
        <div className="flex gap-2">
          {selectedPokemon.pokemon.types.map((type) => {
            // @todo: verify a11y
            return (
              <div
                key={type.type.name}
                className={`type-${type.type.name} rounded-full w-4 h-4 group relative`}
              >
                <div className="hidden group-hover:block absolute bottom-[125%] right-0 bg-white rounded p-1">
                  {type.type.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
