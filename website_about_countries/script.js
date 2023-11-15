let search = document.querySelector(".search")
let button = document.querySelector(".button")
let serchValue = ""
let countryArray = []

fetch("https://restcountries.com/v3.1/all")
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

    fetch("https://restcountries.com/v3.1/all")
    .then(reponse => reponse.json())
    .then(countries => {
        button.addEventListener("click", () =>{
            serchValue = search.value
            if (countryArray.includes(serchValue)){
                console.log("true")
            }else {
                console.log("false")
            }
            
        })
})

console.log(countryArray)







