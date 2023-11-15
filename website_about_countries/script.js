fetch("https://restcountries.com/v3.1/all")
    .then(reponse => reponse.json())
    .then(countries => {
        for (let objCountry in countries) {
            let selectElement = document.querySelector("select")
            let country = document.createElement("option")
            country.innerText = `${countries[objCountry].name.common}`
            selectElement.append(country)
        }
    })



