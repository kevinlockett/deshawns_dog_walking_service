import { getPets, getWalkers } from "./database.js"

const pets = getPets()
const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("pet")) {
            const [,petId] = itemClicked.id.split("--")

            for (const pet of pets) {
                if (pet.id === parseInt(petId)) {

                    let assignedWalker = { name: "" }

                    for (const walker of walkers) {
                        if (pet.walkerId === walker.id) {
                            assignedWalker = walker
                        }
                    }
                    window.alert(`${pet.name} is being walked by ${assignedWalker.name}`)
                }
            }
        }
    }
)

export const PetList = () => {
    let petsHTML = "<ul>"

    for (const pet of pets) {
        petsHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petsHTML += "</ul>"

    return petsHTML
}

