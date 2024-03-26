import { connect } from "./db.js"

async function insertProprietarioRepository(proprietario) {
    const conn = await connect()

    try {

        const sql = "INSERT INTO proprietarios (nome, telefone) VALUES ($1,$2) RETURNING *"
        const values = [proprietario.nome, proprietario.telefone]
        const res = await conn.query(sql, values)

        return res.rows[0]

    } catch (err) {
        throw err

    } finally {
        conn.release()
    }
}

async function getProprietariosRepository() {

    const conn = await connect()

    try {
        const res = await conn.query("SELECT * FROM proprietarios")
        return res.rows
    } catch (err) {
        throw err

    } finally {
        conn.release()
    }
}

async function getProprietarioRepository(id) {

    const conn = await connect()

    try {
        const res = await conn.query("SELECT * FROM proprietarios WHERE proprietario_id = $1", [id])
        return res.rows[0]

    } catch (err) {
        throw err

    } finally {
        conn.release()
    }
}

async function updateProprietariosRepository(proprietario) {

    const conn = await connect()

    try {
        const sql = "UPDATE proprietarios SET nome = $1, telefone = $2 WHERE proprietario_id = $3 RETURNING *"
        const values = [proprietario.nome, proprietario.telefone, proprietario.proprietario_id]
        const res = await conn.query(sql, values)
        return res.rows[0]

    } catch (err) {
        throw err

    } finally {
        conn.release()
    }
}


async function deleteProprietarioRepository(id) {

    const conn = await connect()

    try {
       return  await conn.query("DELETE FROM proprietarios WHERE proprietario_id = $1", [id])
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}




export default {
    insertProprietarioRepository,
    getProprietariosRepository,
    getProprietarioRepository,
    updateProprietariosRepository,
    deleteProprietarioRepository



}