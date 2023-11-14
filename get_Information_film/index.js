async function fetchFilmData(apiUrl){
const response = await fetch(apiUrl);
const data = await response.json();
return data;
}

function createImageElement(src){
    let img = document.createElement("img");
    img.src = src;
    return img;
}