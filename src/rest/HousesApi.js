const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesApi {
  get = async () => {
    try {
        const resp = await fetch(HOUSES_ENDPOINT);
        const data = await resp.json();
        return data;
    } catch(e) {
        console.log('Oops,looks like fetchHouses had an issue.', e);
    )
  }

pub = async (house) => {
    const resp = await fetch(${HOUSES_ENDPOINT}/$ )

}
