import pg from "pg"

async function connect() {
    if (global.connection) {
        return global.connection.connect()
    }
    const pool = new pg.Pool({
        connectionString: "postgres://coaikloa:R0j3e4NUsPrxTxvXJb0WxTjzoZksizuF@isabelle.db.elephantsql.com/coaikloa"
    })
    global.connection = pool

    return pool.connect()
}

export {
    connect
}