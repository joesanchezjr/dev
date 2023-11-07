"use client";

import * as React from "react";

import { Pokemon, PokemonSpecies } from "pokenode-ts";

type PokemonData = { pokemon: Pokemon; species: PokemonSpecies };

type Action =
  | { type: "add_new_pokemon"; payload: PokemonData }
  | { type: "update_current_pokemon"; payload: PokemonData };
type Dispatch = (action: Action) => void;
type State = {
  current: PokemonData;
  allPokemon: Record<string, PokemonData>;
};
type PokemonProviderProps = {
  children: React.ReactNode;
  data: PokemonData;
};
type Context = { state: State; dispatch: Dispatch } | undefined;

const PokemonContext = React.createContext<Context>(undefined);

function pokemonReducer(state: State, action: Action) {
  switch (action.type) {
    case "add_new_pokemon": {
      return {
        current: action.payload,
        allPokemon: {
          ...state.allPokemon,
          [action.payload.pokemon.name]: action.payload,
        },
      };
    }
    case "update_current_pokemon": {
      return { ...state, current: action.payload };
    }
  }
}

export function PokemonProvider({ children, data }: PokemonProviderProps) {
  const { pokemon, species } = data;
  const initialState = {
    current: { pokemon, species },
    allPokemon: { [pokemon.name]: { pokemon, species } },
  };

  const [state, dispatch] = React.useReducer(pokemonReducer, initialState);

  const value = { state, dispatch };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
}

export function usePokemon() {
  const context = React.useContext(PokemonContext);
  if (context === undefined) {
    throw new Error("usePokemon must be used within an PokemonProvider");
  }
  return context;
}
