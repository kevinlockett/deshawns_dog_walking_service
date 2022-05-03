import { getPets, getWalkers, getCities } from "./database.js"

// Get copy of state for use in this module
const walkers = getWalkers()
const pets = getPets()
const cities = getCities()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalkers) => {
    let petWalker = null

    for (const walker of allWalkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }
    return petWalker
}

const findCity = (walker, allCities) => {
    let servicedCity = null

    for (const city of allCities) {
        if (city.id === walker.cityId) {
            servicedCity = city
        }
    }
    return servicedCity.name
}

export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${findCity(currentPetWalker, cities)}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

