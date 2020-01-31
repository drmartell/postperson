export const fetchWithError = url => fetch(url)
  .then(res => res.json())
  .catch(err => console.log(err)); //eslint-disable-line no-console
