import { getWalkers } from "./database.js"

const walkers = getWalkers()


export const WalkerList = () => {
    let walkersHTML = "<ul>"

    for (const walker of walkers) {
        walkersHTML += `<li>${walker.name}</li>`
    }

    walkersHTML += "</ul>"

    return walkersHTML

}

