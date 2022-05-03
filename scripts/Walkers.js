import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    window.alert(`${walker.name} services ${walker.city}`)
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

