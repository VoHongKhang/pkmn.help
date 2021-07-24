// https://niantic.helpshift.com/a/pokemon-go/?s=finding-evolving-hatching&f=weather-boosts&l=en&p=web

const weatherBoosted: { [key: string]: any } = {
  normal: 'Partly cloudy',
  fighting: 'Cloudy',
  flying: 'Windy',
  poison: 'Cloudy',
  ground: 'Sunny/Clear',
  rock: 'Partly cloudy',
  bug: 'Rainy',
  ghost: 'Fog',
  steel: 'Snow',
  fire: 'Sunny/Clear',
  water: 'Rainy',
  grass: 'Sunny/Clear',
  electric: 'Rainy',
  psychic: 'Windy',
  ice: 'Snow',
  dragon: 'Windy',
  dark: 'Fog',
  fairy: 'Cloudy',
  none: '',
}

export function getWeatherBoosted(type: string): string {
  return weatherBoosted[type] || weatherBoosted.none;
}
