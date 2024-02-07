import { getCities, getWalkers } from "./database.js"

const cities = getCities()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        const id = itemClicked.dataset.id

        const walkers = getWalkers()
            
        for (const walker of walkers) {
            if (walker.cityId === parseInt(id)) {
                window.alert(`Pets in ${itemClicked.dataset.name} are cared for by our local professional ${walker.name}`)
            }
        }
    }

)

export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const city of cities) {
        citiesHTML += `<li data-id="${city.id}" data-name="${city.name}" data-type="cities" >${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}