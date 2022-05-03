import { getWalkers } from "./database.js"
import { getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {

                    let servicedCity = { name: "" }

                    for (const city of cities) {
                        if (walker.cityId === city.id) {
                            servicedCity = city
                        }
                    }

                    window.alert(`${walker.name} services ${servicedCity.name}`)
                }
            }
        }
    }
)

export const WalkerList = () => {
    let walkersHTML = "<ul>"

    for (const walker of walkers) {
        walkersHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkersHTML += "</ul>"

    return walkersHTML

}

