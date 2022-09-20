

import { addPlant } from "./field.js"
import { createPlan } from "./scripts/plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/asparagus.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

const thePlan = createPlan()
const asparagus = createAsparagus()
const corn = createCorn()
const potato = createPotato()
const soybean = createSoybean()
const sunflower = createSunflower()
const wheat = createWheat()


export const plantSeeds = (plan) => {
   for (let plant of plan) {
    for (let seed of plant) {
        if(seed === `Asparagus`) {
            addPlant(asparagus)
        }
        if(seed === `Corn`) {
            addPlant(corn)
        }
        if(seed === `Potato`) {
            addPlant(potato)
        }
        if(seed === `Soybean`) {
            addPlant(soybean)
        }
        if(seed === `Sunflower`) {
            addPlant(sunflower)
        }
        if(seed === `Wheat`) {
            addPlant(wheat)
        }
    }
   }

}