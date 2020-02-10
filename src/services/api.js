export const fetchWithError = (url, options = {}) => fetch(url, options)
  .then(res => res.json())
  .catch(err => console.log(err)); //eslint-disable-line no-console

// export async function fetchWithError(url, options = {}) {
//   const response = await fetch(url, options);
//   const data = await response.json();

//   if(response.ok) {
//     return data;
//   }
//   else {
//     throw data.error;
//   }
// }
