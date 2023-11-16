let search = document.querySelector(".search")
let button = document.querySelector(".button")
let serchValue = ""
let countryArray = []

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

button.addEventListener("click", () =>{
    serchValue = search.value

        if (!serchValue){
            serchValue = document.querySelector("select").value  
        }

        if (countryArray.includes(serchValue)){
            countryInformation(serchValue)
        } else {
            console.log(Error)
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
            capitalName.innerText = `Capital  ${getcapital}`
            capital.append(capitalName)

            if (languages){
                let language =  Object.values(languages).join(", ")
                let languagesBox = document.querySelector(".languages")
                clear(languagesBox)
                let languagesName = document.createElement("p")
                languagesName.innerText = `Oficial languages  ${language}`
                languagesBox.append(languagesName)
             }

        })

}

function clear(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
















