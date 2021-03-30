export default class EventApi {
  constructor() {
    this.fetchApi();
  }

  async fetchApi() {
    const results = await fetch('https://pokeapi.co/api/v2/').then((response) =>
      response.json()
    );

    return results;
  }
}
