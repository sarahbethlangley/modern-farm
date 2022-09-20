console.log("Welcome to the main module")

import { createPlan } from "./scripts/plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/asparagus.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { plantSeeds } from "./tractor.js"
import { addPlant, usePlants } from "./field.js"


const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)
const plantArray = usePlants()


const asparagus = createAsparagus()
const corn = createCorn()
const potato = createPotato()
const soybean = createSoybean()
const sunflower = createSunflower()
const wheat = createWheat()






// import { createAsparagus } from "./seeds/asparagus.js"

// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)