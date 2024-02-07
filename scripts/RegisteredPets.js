import { getPets, getWalkers } from "./database.js"

const pets = getPets()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "registeredPets") {

            const walkerId = itemClicked.dataset.walkerforeignkey

            const walkers = getWalkers()
            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                
                        window.alert(`${itemClicked.dataset.name} is being walked by ${walker.name}.`)
                    }
            }
        }
    }
)

export const PetList = () => {
    let petsHTML = "<ul>"

    for (const pet of pets) {
        petsHTML += `<li data-name=${pet.name} data-walkerForeignKey="${pet.walkerId}" data-type="registeredPets" >${pet.name}</li>`
    }

    petsHTML += "</ul>"

    return petsHTML
}

