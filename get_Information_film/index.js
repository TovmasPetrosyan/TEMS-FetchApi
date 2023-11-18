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
    let plot = document.createElement('p');
    plot.textContent = film.Plot;
    desc.appendChild(plot);
    let releaseDate = document.createElement('p');
    releaseDate.textContent = `Release Date: ${film.Released}`;
    desc.appendChild(releaseDate);
    return desc;
}

function createMoreButton(descriptionElem){
    let moreButton = document.createElement('button');
        moreButton.innerText = 'more';
        moreButton.className = 'more-button';

        moreButton.onclick = function (){        
        if(descriptionElem.style.display === 'none' || descriptionElem.style.display === ''){
            descriptionElem.style.display = 'block';
            moreButton.textContent = 'less';
        }else{
            descriptionElem.style.display = 'none';
            moreButton.textContent = 'more';
        }
    }
    return moreButton;
}

async function main(){
    
    const filmData = await fetchFilmData('https://gist.githubusercontent.com/Urdzik/de477f8e3d7baf4366c9d797cfe63531/raw/38c6afa2937ef222323392cc34c8c8c77e02fc40/Movie.json');
    const filmList = document.getElementById('film-list');
    for(const film of filmData){
      if(film.Title != "Little Women"){
      const filmContainer = document.createElement('div');
      filmContainer.className = 'flex-item';

      const titleElem = document.createElement('h2');
      titleElem.textContent = film.Title;

      const imgElem = createImageElement(film.Poster);
      const descriptionElem = createDescriptionElement(film);
      const moreButton = createMoreButton(descriptionElem);

      // Append title, image and moreButton to the film container

      filmContainer.appendChild(titleElem);
      filmContainer.appendChild(imgElem);
      filmContainer.appendChild(descriptionElem);
      filmContainer.appendChild(moreButton);

      // Append film to the film list

      filmList.appendChild(filmContainer);
    }
}
}


main();