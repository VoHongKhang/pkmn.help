import fetch from "node-fetch";
import path from "path";
import { URL } from "url";
import { saveJSON } from "./saveJSON";

const API = process.env.API || "https://pokeapi.co/api/v2/";
const DEST = path.resolve(__dirname, "../data");

interface PokemonSpeciesBasic {
  name: string;
  url: string;
}

interface PokemonSpeciesDetail {
  id: number;
  names: {
    name: string;
    // language: {
      // name: string;
      // url: string;
    // };
  }[];
  varieties: {
    is_default: boolean;
    pokemon: {
      name: string;
      url: string;
    };
  }[];
  evolves_from_species: {
    name: string;
    url: string;
  };
  evolution_chain: {
    url: string;
  };  
}

interface PokemonForm {
  form_names: {
    name: string;
    // language: {
      // name: string;
      // url: string;
    // };
  }[];
}

interface PokemonDetail {
  id: number;
  name: string;
  is_default: boolean;
  forms: {
    name: string;
    url: string;
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  // stats: {
    // base_stat: number;
    // stat: {
      // name: string;
      // url: string;
    // };
  // }[];
  sprites: {
    front_default: string;
  };
}

interface PokemonSimple {
  name: string;
  // speciesNames: Record<string, string>;
  // formNames: Record<string, string>;
  number: number;
  spriteURL: string;
  // hp: number;
  // attack: number;
  // defense: number;
  // spAttack: number;
  // spDefense: number;
  // speed: number;
  id: string;
  types: string[];
  evolves_from_species: string[];
}

async function fetchJSON<T>(url: string): Promise<T> {
  const resp = await fetch(url);
  return await resp.json();
}

async function fetchPaginated<T>(url: string, limit = Infinity): Promise<T[]> {
  const results: T[] = [];
  let nextURL = url;
  let resp: any = null;
  do {
    resp = await fetchJSON(nextURL);
    results.push(...resp.results);
    nextURL = resp.next;
  } while (nextURL && results.length < limit);
  if (Number.isFinite(limit)) {
    results.length = limit;
  }
  return results;
}

function toObject<T, K extends string, V>({
  data,
  key,
  value,
}: {
  data: T[];
  key: (item: T) => K;
  value: (item: T) => V;
}): Record<K, V> {
  const obj = {} as Record<K, V>;
  for (const item of data) {
    obj[key(item)] = value(item);
  }
  return obj;
}

async function main(): Promise<void> {
  const speciesList = await fetchPaginated<PokemonSpeciesBasic>(
    new URL("pokemon-species", API).toString(),
    Number(process.env.LIMIT || "Infinity")
  );
  const pokemonSimpleList: PokemonSimple[] = [];
  for (const species of speciesList) {
    const speciesDetail = await fetchJSON<PokemonSpeciesDetail>(species.url);
    
    var speciesDetail_evolves_from_species:string[] = [];
    if (speciesDetail.evolves_from_species != null){
      speciesDetail_evolves_from_species[0] = speciesDetail.evolves_from_species.name;
      speciesDetail_evolves_from_species[1] = speciesDetail.evolves_from_species.url;
      console.log(speciesDetail_evolves_from_species);
    }

    for (const variety of speciesDetail.varieties) {
      const detail = await fetchJSON<PokemonDetail>(variety.pokemon.url);
      // const stats = toObject({
        // data: detail.stats,
        // key: (item) => item.stat.name,
        // value: (item) => item.base_stat,
      // });
      const form = await fetchJSON<PokemonForm>(detail.forms[0].url);
      // const formNames = toObject({
        // data: form.form_names,
        // key: (item) => item.language.name,
        // value: (item) => item.name,
      // });
      const mon: PokemonSimple = {
        name: detail.name,
        // speciesNames,
        // formNames,
        number: speciesDetail.id,
        spriteURL: detail.sprites.front_default,
        // hp: stats["hp"] ?? 0,
        // attack: stats["attack"] ?? 0,
        // defense: stats["defense"] ?? 0,
        // spAttack: stats["special-attack"] ?? 0,
        // spDefense: stats["special-defense"] ?? 0,
        // speed: stats["speed"] ?? 0,
        id: String(detail.id),
        types: detail.types.map((t) => t.type.name),
        evolves_from_species: speciesDetail_evolves_from_species,
      };
      pokemonSimpleList.push(mon);
      console.log(speciesDetail.id, detail.id);
    }
    
    // for (const evolution_chain of speciesDetail.evolution_chain) {
        
        // const detail_evolution_chain = await fetchJSON<PokemonDetail>(evolution_chain.url);
        
    // }
    
  }
  saveJSON(path.resolve(DEST, "pokemon.json"), pokemonSimpleList);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
