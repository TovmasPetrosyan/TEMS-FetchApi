let search = document.querySelector(".search")
let button = document.querySelector(".button")
let select = document.querySelector("select")
let countryArray = []
let existingErrorDiv = false

fetch("https://restcountries.com/v3.1/all?fields=name")
    .then(reponse => reponse.json())
    .then(countries => {
        for (let objCountry in countries) {
            let selectElement = document.querySelector("select")
            let country = document.createElement("option")
            country.innerText = `${countries[objCountry].name.common}`
            selectElement.append(country)
            countryArray.push(countries[objCountry].name.common)
        }   
})

select.addEventListener("mouseup", () =>{
    let serchValue = document.querySelector("select").value
    let errorDiv = document.querySelector(".error")
    if (errorDiv) {
        errorDiv.remove();
    } 
    countryInformation(serchValue)
})

button.addEventListener("click", () =>{
    serchValue = search.value

    if (!countryArray.includes(serchValue)){

        let imageClass = document.querySelector(".imageClass");
        let countryName = document.querySelector(".countryName");
        let capital = document.querySelector(".capital");
        let languages = document.querySelector(".languages");
        let population = document.querySelector(".population");
        let area = document.querySelector(".area");
        clear(imageClass)
        clear(countryName)
        clear(capital)
        clear(languages)
        clear(population)
        clear(area)

        let countryIformation = document.querySelector(".countryIformation");
        let newDiv = document.createElement("div")
        newDiv.classList.add("error")
        let error = document.createElement("img")
        error.setAttribute("src", "./error.png")
        newDiv.append(error)
        let existingErrorDiv = document.querySelector(".error");
        if (existingErrorDiv) {
            existingErrorDiv.remove();
        }   
        countryIformation.append(newDiv)
    }else{
        countryInformation(serchValue)
    }
})

function countryInformation(serchValue){
    fetch(`https://restcountries.com/v3.1/name/${serchValue}`)
        .then(reponse => reponse.json())
        .then(countries => {

            let flag = countries[0].flags.png 
            let name = countries[0].name.official
            let getcapital =  countries[0].capital
            let languages = countries[0].languages
            let population = countries[0].population
            let area = countries[0].area
            

            let image = document.querySelector(".imageClass") 
            clear(image)
            let imagePng = document.createElement("img")
            imagePng.setAttribute("src", flag)
            image.append(imagePng)
            imagePng.setAttribute("class", "flagClass")

            let countryName = document.querySelector(".countryName")
            clear(countryName)
            let fullName = document.createElement("h2")
            fullName.innerText = name
            countryName.append(fullName)

            let capital = document.querySelector(".capital")
            clear(capital)
            let capitalName = document.createElement("p")
            capitalName.innerText = `Capital:  ${getcapital}`
            capital.append(capitalName)

            if (languages){
                let language =  Object.values(languages).join(", ")
                let languagesBox = document.querySelector(".languages")
                clear(languagesBox)
                let languagesName = document.createElement("p")
                languagesName.innerText = `Oficial languages:  ${language}`
                languagesBox.append(languagesName)
             }

            let populationClass = document.querySelector(".population")
            clear(populationClass)
            let populationName = document.createElement("p")
            populationName.innerText = `Population:  ${population}`
            populationClass.append(populationName)

            let areaClass = document.querySelector(".area")
            clear(areaClass)
            let areaName = document.createElement("p")
            areaName.innerText = `Nationality:  ${area}`
            areaClass.append(areaName) 
        })
}

function clear(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function clearAll(...elements) {
    for(let element = 0 ; element < elements.length ; element++) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
    
}










