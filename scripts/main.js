import { HeroList } from "./heroes.js"
import { VillainList} from "./villains.js"

const heroListHTML = HeroList()
const villainListHTML = VillainList()

const theWholeEnchilada = `
    <h1>Heroes</h1>
    ${heroListHTML}
    
    <h1>Villains</h1>
    ${villainListHTML}
`


const theExistingMainElement = document.querySelector("#container")

theExistingMainElement.innerHTML = theWholeEnchilada
