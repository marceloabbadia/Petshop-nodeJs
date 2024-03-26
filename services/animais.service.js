import animaisRepository from "../repositories/animais.repository.js"

async function createAnimalService(animal) {
    return await animaisRepository.insertAnimalRepository(animal)

}


async function getAnimaisService(proprietario_id) {
    if(proprietario_id){
        return await animaisRepository.getProprietarioAnimalRepository(proprietario_id)
    }
    return await animaisRepository.getAnimaisRepository()
}

async function getAnimalService(id) {
    return await animaisRepository.getAnimalRepository(id)
}

async function updateAnimalService(animal) {
    return await animaisRepository.updateAnimalsRepository(animal)
}

async function deleteAnimalService(id) {
    await animaisRepository.deleteAnimalRepository(id)
}


    




export default {
    createAnimalService,
    getAnimaisService,
    getAnimalService,
    updateAnimalService,
    deleteAnimalService,

}