import pg from "pg"

async function connect() {
    if (global.connection) {
        return global.connection.connect()
    }
    const pool = new pg.Pool({
        connectionString: "COLOQUE SEU ENDERECO DO BD AQUI"
    })
    global.connection = pool

    return pool.connect()
}

export {
    connect
}