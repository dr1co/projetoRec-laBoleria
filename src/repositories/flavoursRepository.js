import connection from '../databases/postgres.js';

export async function findFlavour(flavour) {
    return connection.query(`
        SELECT * FROM "flavours"
        WHERE flavours.name = $1
    `,
        [flavour]
    );
}

export async function findFlavourById(id) {
    return connection.query(`
        SELECT * FROM "flavours"
        WHERE flavours.id = $1
    `,
        [id]
    );
}

export async function insertFlavour(flavour) {
    return connection.query(`
        INSERT INTO "flavours" ("name")
        VALUES ($1)
    `,
        [flavour]
    );
}