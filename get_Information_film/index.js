async function fetchFilmData(apiUrl){
const response = await fetch(apiUrl);
const data = await response.json();
return data;
}