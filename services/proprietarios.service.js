import proprietariosRepository from "../repositories/proprietarios.repository.js"
import animaisRepository from "../repositories/animais.repository.js"


async function createProprietarioService(proprietario) {
    return await proprietariosRepository.insertProprietarioRepository(proprietario)

}

async function getProprietariosService() {
    return await proprietariosRepository.getProprietariosRepository()
}

async function getProprietarioService(id) {
    return await proprietariosRepository.getProprietarioRepository(id)
}

async function updateProprietarioService(proprietario) {
    return await proprietariosRepository.updateProprietariosRepository(proprietario)
}

async function deleteProprietarioService(id) {
    try {
        const animais = await animaisRepository.getProprietarioAnimalRepository(id);
        if (animais.length > 0) {
            throw new Error("Proprietário possui animais cadastrados e não pode ser excluído!");
        }

        await proprietariosRepository.deleteProprietarioRepository(id);
    } catch (err) {
        if (err.code === '23503') { 
            throw new Error("Proprietário possui animais cadastrados e não pode ser excluído!");
        }
        throw err; 
    }
}



export default {
    createProprietarioService,
    getProprietariosService,
    getProprietarioService,
    updateProprietarioService,
    deleteProprietarioService

}