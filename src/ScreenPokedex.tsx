import classnames from "classnames";
import matchSorter from "match-sorter";
import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import { Pokemon, Type, typesOrNoneFromString } from "./data";
import { getImage } from "./getImage";
import { formatPokemonName } from "./formatPokemonName";
import { getWeatherBoosted } from "./getWeatherBoosted";
import Paginator from "./Paginator";
import { pickTranslation } from "./pickTranslation";
import Search from "./Search";
// import StatsTable from "./StatsTable";
import { useSearch } from "./useSearch";
import { useDebounce } from "use-debounce";
import { cssType } from "./cssType";

import DataPvpGL from "./data-pvp-gl.json";
import DataPvpUL from "./data-pvp-ul.json"
import DataEvolutions from "./data-evolutions.json";
import DataBuddyCandies from "./data-buddy-distances.json";


const PAGE_SIZE = 20;
const nbsp = "\u00a0";

interface MonsterTypeProps {
  type: Type;
  index: number;
}

function MonsterType({ type, index }: MonsterTypeProps) {
  return (
    <div
      className={classnames(
        cssType(type),
        "type-bg",
        "ttc tc flex",
        "pv0 ph2 lh-copy b",
        "br-pill ba border3 f6",
        { ml1: index > 0 }
      )}
    >
      {type}
    </div>
  );
}


function WeatherBoosted({ type, index }: MonsterTypeProps) {
  return (
    <div
      className={classnames(
        `type-${getWeatherBoosted(type)}`,
        "ttc tc flex",
        "pv0 ph2 lh-copy b",
        "br-pill ba border3 f6",
        { ml1: index > 0 }
      )}
    >
      {getWeatherBoosted(type)}
    </div>
  );
}

WeatherBoosted.displayName = "WeatherBoosted";

interface MonsterProps {
  pokemon: Pokemon;
}

// Find GL or UL best IVs
function findByDex(data: any[], Dex: number) {
  const el = data.find(el => el.Dex === Dex); // Possibly returns `undefined`
  if (el) {
    return (
      <div className="tl ph2">
        Level {el.Lvl}
        <span aria-hidden="true" className="o-50">
          &nbsp;&bull;&nbsp;
        </span>
        CP {el.CP}
        <span aria-hidden="true" className="o-50">
          &nbsp;&bull;&nbsp;
        </span>
        IV {el.AtkIV}/{el.DefIV}/{el.StaIV}
      </div>
    );
  }
}

// Find buddy distances to earn a candy by gamepress.gg data
// Deprecated
// function findByName(data: any[], Name: string) {
//   const myName = Name.split('-');
//   const el = data.find(el => el.title.toLocaleLowerCase().includes(myName[0]));
//   if (el) {
//     return (
//       <div className="tl ph2">
//         {el.field_buddy_distance_requirement} to earn a candy
//       </div>
//     );
//   }
// }

// Find buddy distances to earn a candy
// Data from https://pogoapi.net/api/v1/pokemon_buddy_distances.json
function findByDexToCandy(data: any[], Dex: number) {
  const el = data.find(el => el.pokemon_id === Dex);
  if (el) {
    return el.distance
  }
}

function findByDexToCandyAll(data: any, Dex: number) {
  let el = findByDexToCandy(data[1], Dex)
  if (!el) {
    el = findByDexToCandy(data[3], Dex)
  }
  if (!el) {
    el = findByDexToCandy(data[5], Dex)
  }
  if (!el) {
    el = findByDexToCandy(data[20], Dex)
  }
  if (el) {
    return (
      <div className="tl ph2">
        {el} km to earn a candy
      </div>
    );
  }
}



// function findByDexToEvo(data: any[], Dex: number) {
//   const el = data.find(el => el.pokemon_id === Dex); // Possibly returns `undefined`
//   if (el) {
//     return (
//       <div className="tl ph2">
//         <Link
//           className="fg-link OutlineFocus"
//           style={{ textDecoration: "none" }}
//           to={`/pokedex?q=${el.evolutions[0].pokemon_name}`}
//         >
//           {el.evolutions[0].pokemon_name}
//         </Link> with {el.evolutions[0].candy_required} candies
//       </div>
//     );
//   }
// }

function findByDexToEvolutions(data: any[], Dex: number) {
  const el = data.find(el => el.pokemon_id === Dex); // Possibly returns `undefined`
  if (el) {
    const items = el.evolutions.map(function (name: any) {

      // console.log(name.pokemon_name)

      return (
        <div className="tl ph2" key={name.pokemon_id}>
          <Link
            className="fg-link OutlineFocus"
            style={{ textDecoration: "none" }}
            to={`/pokedex?q=${name.pokemon_name}`}
            key={name.pokemon_id}
          >
            {name.pokemon_name}</Link>
          {" "} with {name.candy_required} candies
          {name.item_required ? " & " + name.item_required : ""}
          {name.lure_required ? " & " + name.lure_required : ""}
          {name.gender_required ? " & be a " + name.gender_required : ""}
          {name.must_be_buddy_to_evolve ? " & must be buddy" : ""}
          {name.buddy_distance_required ? " & walked " + name.buddy_distance_required + " km" : ""}
          {name.only_evolves_in_nighttime ? " & Nighttime" : ""}
          {name.only_evolves_in_daytime ? " & Daytime" : ""}
          {name.no_candy_cost_if_traded ? " OR trade to evolve with no candy" : ""}
        </div>
      );
    });

    return (
      <div>
        {items}
      </div>
    );
  }
}

function findByDexFromEvo(data: any[], Dex: number) {
  const el = data.find(el => el.evolutions[0].pokemon_id === Dex); // Possibly returns `undefined`
  if (el) {
    // console.log(el.evolutions[0].candy_required);
    return (
      <div className="tl ph2">
        <Link
          className="fg-link OutlineFocus"
          style={{ textDecoration: "none" }}
          to={`/pokedex?q=${el.pokemon_name}`}
        >
          {el.pokemon_name}
        </Link> by {el.evolutions[0].candy_required} candies
      </div>
    );
  }
}


function Monster({ pokemon }: MonsterProps) {
  const displayNumber = "#" + String(pokemon.number).padStart(3, "0");
  const params = new URLSearchParams({ types: pokemon.types.join(" ") });
  const speciesName = pickTranslation(pokemon.speciesNames);
  const formName = pickTranslation(pokemon.formNames);
  const pokemonName = formatPokemonName({ speciesName, formName });
  return (
    <div className={classnames("fg1 pv3", "flex-ns items-center", "Monster")}>
      <div className="flex flex-column">
        <div className="flex flex-column pa3 br4 bg1 flex ba border4">
          <div className="flex items-center">
            <h2 className="mv0 f4">{speciesName}</h2>
            <div className="ph1 flex-auto" />
            <div className="fg3 mv0 tabular-nums f5">{displayNumber}</div>
          </div>
          <div className="nv2 fg3 f5">{formName || nbsp}</div>

          <div className="pv3 flex justify-center">
            <img
              src={getImage(pokemon.id)}
              role="presentation"
              alt=""
              className="db img-crisp"
              width={96}
              height={96}
            />
          </div>

          <div className="pt2 flex justify-end">
            {pokemon.types.map((t, i) => (
              <MonsterType key={i} type={t} index={i} />
            ))}
          </div>
          <div className="pt2 flex justify-end">
            {pokemon.types.map((t, i) => (
              <WeatherBoosted key={i} type={t} index={i} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-column">

        <div className="StatsTable tabular-nums">
          <div className="b tl">Great League</div>
          {findByDex(DataPvpGL, pokemon.number)}
        </div>
        <div className="StatsTable tabular-nums">
          <div className="b tl">Ultra  League</div>
          {findByDex(DataPvpUL, pokemon.number)}
        </div>
        <div className="StatsTable tabular-nums">
          <div className="b tl">Buddy distance</div>
          {findByDexToCandyAll(DataBuddyCandies, pokemon.number)}
        </div>
        <div className="StatsTable tabular-nums">
          <div className="b tl">Evolutions from:</div>
          {findByDexFromEvo(DataEvolutions, pokemon.number)}
        </div>
        <div className="StatsTable tabular-nums">
          <div className="b tl">Evolutions to:</div>
          {findByDexToEvolutions(DataEvolutions, pokemon.number)}
        </div>

        {/* <StatsTable pokemon={pokemon} /> */}

        <div className="flex justify-end">
          <Link
            aria-label={`Defense for ${speciesName} (${formName})`}
            className="underline fg-link OutlineFocus"
            to={`/defense?${params}#matchup-defense`}
          >
            Defense
          </Link>
          <span aria-hidden="true" className="o-50">
            &nbsp;&bull;&nbsp;
          </span>
          <Link
            aria-label={`Offense for ${pokemonName}`}
            className="underline fg-link OutlineFocus"
            to={`/offense?${params}#matchup-offense`}
          >
            Offense
          </Link>
          <span aria-hidden="true" className="o-50">
            &nbsp;&bull;&nbsp;
          </span>
          <a
            aria-label={`Pokémon GO Wiki page for ${speciesName}`}
            className="underline fg-link OutlineFocus"
            href={`https://pokemongo.fandom.com/wiki/${pokemon.name}`}
          >
            Wiki
          </a>
        </div>
      </div>
    </div>
  );
}


interface DexProps {
  allPokemon: Pokemon[];
  setPokedexParams: (params: string) => void;
  isLoading: boolean;
}

export default function ScreenPokedex({
  allPokemon,
  setPokedexParams,
  isLoading,
}: DexProps) {
  const search = useSearch();
  const history = useHistory();
  const query = search.get("q") || "";
  const [debouncedQuery] = useDebounce(query, 500);
  const page = Number(search.get("page") || 1) - 1;

  const searchablePkmn = React.useMemo(() => {
    return allPokemon.map((p) => {
      return {
        ...p,
        speciesName: pickTranslation(p.speciesNames),
        formName: pickTranslation(p.formNames),
      };
    });
  }, [allPokemon]);

  const pkmn = React.useMemo(() => {
    const s = debouncedQuery.trim();
    if (/^[0-9]+$/.test(s)) {
      const number = Number(s);
      return searchablePkmn.filter((p) => p.number === number);
    }
    const types = typesOrNoneFromString(s);
    if (types.length > 0) {
      return searchablePkmn.filter((p) => {
        if (types.length === 1) {
          return p.types[0] === types[0] || p.types[1] === types[0];
        }
        if (types.length === 2 && types[1] === Type.NONE) {
          return p.types.length === 1 && p.types[0] === types[0];
        }
        return (
          p.types.slice().sort().join(" ") === types.slice().sort().join(" ")
        );
      });
    }
    return matchSorter(searchablePkmn, s, {
      keys: ["speciesName", "formName", "number"],
    });
  }, [debouncedQuery, searchablePkmn]);

  function createParams(newQuery: string, newPage: number): string {
    const params = new URLSearchParams();
    if (newQuery) {
      params.set("q", newQuery);
    }
    if (Number(newPage) > 0) {
      params.set("page", String(newPage + 1));
    }
    return "?" + params;
  }

  function update(newQuery: string, newPage: number) {
    const params = createParams(newQuery, newPage);
    history.replace({ search: params });
  }

  const params = createParams(query, page);
  React.useEffect(() => {
    setPokedexParams(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <main className="ph3 mt3 center content-narrow">
      <Search
        search={query}
        updateSearch={(newQuery) => {
          update(newQuery, 0);
        }}
      />
      <div className="flex justify-between ph2 nt2 pb3 bb border4 f6">
        <span className="fg3">Search by name, number, or types</span>
        <Link
          to="/pokedex/help/"
          className="underline fg-link OutlineFocus"
          aria-label="Help, search Pokédex"
        >
          Help
        </Link>
      </div>
      {isLoading ? (
        <div className="Spinner center mt4 f2" />
      ) : (
        <Paginator
          currentPage={page}
          urlForPage={(newPage) => {
            return createParams(query, newPage);
          }}
          pageSize={PAGE_SIZE}
          emptyState={<p className="fg4 f4 b tc m0">No Pokémon found</p>}
          items={pkmn}
          renderPage={(page) =>
            page.map((pokemon) => (
              <Monster key={pokemon.id} pokemon={pokemon} />
            ))
          }
        />
      )}
    </main>
  );
}


