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

function createDescriptionElement(film){
    let desc = document.createElement('div');
    desc.className = 'description';
    let releaseDate = document.createElement('p');
    releaseDate.textContent = `Release Date: ${film.Released}`;
    desc.appendChild(releaseDate);
    return desc;
}