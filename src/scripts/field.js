const plants = []

export const addPlant = (seed) => {
    if(Array.isArray(seed)){
        for (const seedObj of seed) {
            plants.push(seedObj)
        }
    } else {
     plants.push(seed)
    }
    return plants
}

export const usePlants = () => {
    return plants.map(plant => ({...plant}))
}