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