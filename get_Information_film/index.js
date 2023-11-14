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

function createMoreButton(descriptionElem){
    let moreButton = document.createElement('button');
        moreButton.innerText = 'more';
        moreButton.className = 'more-button';

        moreButton.onclick = function (){        
        if(descriptionElem.style.display === 'none' || descriptionElem.style.display === ''){
            descriptionElem.style.display = 'block';
            moreButton.innerText = 'less';
        }else{
            descriptionElem.style.display = 'none';
            moreButton.innerText = 'more';
        }
    }
    return moreButton;
}

async function main(){
    
    const filmData = await fetchFilmData('https://gist.githubusercontent.com/Urdzik/de477f8e3d7baf4366c9d797cfe63531/raw/38c6afa2937ef222323392cc34c8c8c77e02fc40/Movie.json');
    const filmList = document.getElementById('film-list');
    for(const film of filmData){
      const filmContainer = document.getElementById('div');
      filmContainer.className = 'flex-item';
    }
}


main();