
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"

const plants = usePlants()


export const harvestPlants = (plants) => {
    for (const plant of plants) {
        const harvest = []
        if (plant !== "Corn") {
            for(let i = 0; i < plant.output; i++){
                    harvest.push(plant)
            } 
            } else {
            for (let i = 0; i < plant.output/2; i++) {
                   harvest.push(plant)
            }
            }
        }
        return harvest
    }



harvestPlants(plants)