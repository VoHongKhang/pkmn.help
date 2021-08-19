[![Netlify Status](https://api.netlify.com/api/v1/badges/1673960f-312c-45ac-9e23-43caabe3b5bb/deploy-status)](https://app.netlify.com/sites/pkmn-help/deploys)

**👉 <https://www.pkmn.help>**

**🚀 This repo page <https://nguoianphu.github.io/pkmn.help>**

**🎉 FTP web page <https://play.nguoianphu.com/pkmn.help/>**

# Pokémon Type Calculator

Pokémon Type Calculator helps you figure out offense/defense matchups for Pokémon

## Development

```
$ npm install
$ npm run start
```

## New features in my forked

Info for **Pokemon GO** only

- Add weather boosted per type of pokemon
  - Data from <https://niantic.helpshift.com/a/pokemon-go/?s=finding-evolving-hatching&f=weather-boosts&l=en&p=web>
- Add rank 1 & IV for Great & Ultra Leagues into Pokedex
  - Data get from <https://pvpivs.com/leagueRanks.html>
- Create Android APK to install on mobile
  - Using Capacitor
- Use hashrouter so we can deploy this webpage in a subfolder like Github page
  - Github page <https://nguoianphu.github.io/pkmn.help>
  - My own web hosting <https://play.nguoianphu.com/pkmn.help/>
- Add buddy distance to earn candies: how many km per candy
  - Data from https://gamepress.gg
- Add Evolutions
  - Data from https://pogoapi.net/
  - Add required candies to evolve
  - Item to evolve
  - Other conditions to evolve
- Change Bulbapedia to Fandom Pokemon Go
- To do:
  - Add previous form before evolution
    - Example Vaporeon shows Eevee but others like Jolteon, Flareon, etc show nothing
  - Make the mobile app better