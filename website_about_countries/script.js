const search = document.querySelector(".search")
const button = document.querySelector(".button")
const select = document.querySelector("select")
const countryIformation = document.querySelector(".countryIformation");
const countryArray = []


fetch("https://restcountries.com/v3.1/all?fields=name")
    .then(reponse => reponse.json())
    .then(countries => {
        for (let objCountry in countries) {
            const selectElement = document.querySelector("select")
            const country = document.createElement("option")
            country.innerText = `${countries[objCountry].name.common}`
            selectElement.append(country)
            countryArray.push(countries[objCountry].name.common)
        }   
})

select.addEventListener("mouseup", () =>{
    countryInformation(document.querySelector("select").value)
})

button.addEventListener("click", () =>{

    
    if (!countryArray.includes(search.value)){
        clear(countryIformation)
        const newDiv = document.createElement("div")
        newDiv.classList.add("error")
        const error = document.createElement("img")
        error.setAttribute("src", "./error.png")
        newDiv.append(error)
        countryIformation.append(newDiv)
    }else {
        countryInformation(search.value)
    }
})

function countryInformation(serchValue){
    fetch(`https://restcountries.com/v3.1/name/${serchValue}`)
        .then(reponse => reponse.json())
        .then(countries => {

            const flag = countries[0].flags.png 
            const name = countries[0].name.official
            const getcapital =  countries[0].capital
            const languagesAll = countries[0].languages
            const pop = countries[0].population
            const areaCountre = countries[0].area

            clear(countryIformation)

            const imageClass = document.createElement("div")
            imageClass.classList.add("imageClass")
            const imagePng = document.createElement("img")
            imagePng.setAttribute("src", flag)
            imagePng.setAttribute("class", "flagClass")
            imageClass.append(imagePng)
            countryIformation.append(imageClass)


            const countryName = document.createElement("div")
            countryName.classList.add("countryName")
            const fullName = document.createElement("h2")
            fullName.innerText = name
            countryName.append(fullName)
            countryIformation.append(countryName)

            const capital = document.createElement("div")
            capital.classList.add("capital")
            const capitalName = document.createElement("p")
            capitalName.innerText = `Capital:  ${getcapital}`
            capital.append(capitalName)
            countryIformation.append(capital)

            if (languagesAll){
                const languageBox =  Object.values(languagesAll).join(", ")
                const languages = document.createElement("div")
                languages.classList.add("languages")
                const languagesName = document.createElement("p")
                languagesName.innerText = `Oficial languages:  ${languageBox}`
                languages.append(languagesName)
                countryIformation.append(languages)
            }

            const population = document.createElement("div")
            population.classList.add("population")
            const populationName = document.createElement("p")
            populationName.innerText = `Population:  ${pop}`
            population.append(populationName)
            countryIformation.append(population)

            const area = document.createElement("div")
            area.classList.add("area")
            const areaName = document.createElement("p")
            areaName.innerText = `Nationality:  ${areaCountre}`
            area.append(areaName)
            countryIformation.append(area)
        })
}

function clear(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
