import { WalkerList } from "./Walkers.js"
import { CityList } from "./CityList.js"
import { PetList } from "./RegisteredPets.js"
import { Assignments } from "./Assignments.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<div class="title">
    <section class="title__container">
        <img src="./img/dog.png" alt="DeShawn's beagle, Skip" />
        <h1>DeShawns Dog Walking</h1>
    </section>
</div>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Cities with Service</h2>
        ${CityList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Walkers</h2>
        ${WalkerList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Pets</h2>
        ${PetList()}
    </section>
</article>

<article class="assignments">
    <h2>Current Assignments</h2>
    ${Assignments()}
</article>
`

mainContainer.innerHTML = applicationHTML

