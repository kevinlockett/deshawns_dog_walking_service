import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "walkers") {

            const cityId = itemClicked.dataset.cityforeignkey

            const cities = getCities()
            
            for (const city of cities) {
                if (city.id === parseInt(cityId)) {
                    window.alert(`${itemClicked.dataset.name} cares for our pets in ${city.name}`)
                }
            }
        }
    }

)

export const WalkerList = () => {
    let walkersHTML = "<ul>"

    for (const walker of walkers) {
        walkersHTML += `<li data-name="${walker.name}" data-cityForeignKey="${walker.cityId}" data-type="walkers" >${walker.name}</li>`
    }

    walkersHTML += "</ul>"

    return walkersHTML
}

