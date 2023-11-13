"use client";

import { usePokemon } from "@/components/pokemon/pokemon-context";
import { getRandomPokemon } from "@/lib/pokemon";
import React from "react";

export default function PokemonRandomButton() {
  const { state, dispatch } = usePokemon();

  async function fetchRandomPokemon() {
    const randomPokemonId = Math.floor(Math.random() * 1017) + 1;

    const pokemonInState = Object.entries(state.allPokemon).find(
      ([_, data]) => data.pokemon.id === randomPokemonId,
    );

    if (pokemonInState) {
      const [_, data] = pokemonInState;
      return dispatch({
        type: "update_current_pokemon",
        payload: data,
      });
    }

    const randomPokemon = await getRandomPokemon(randomPokemonId);

    dispatch({
      type: "add_new_pokemon",
      payload: randomPokemon,
    });
  }

  return (
    <button
      className="mt-2 rounded border bg-white-100 dark:bg-black dark:border-slate-800 px-2 py-1 text-xs hover:bg-slate-50 active:bg-slate-300 dark:hover:bg-slate-900 dark:active:bg-slate-600"
      onClick={fetchRandomPokemon}
    >
      Random 🔀
    </button>
  );
}
