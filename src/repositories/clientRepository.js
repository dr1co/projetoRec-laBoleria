import connection from '../databases/postgres.js';

export async function findClientByPhone(phone) {
    return connection.query(`
        SELECT * FROM "clients"
        WHERE phone = $1
    `,
        [phone]
    );
}

export async function findClientById(id) {
    return connection.query(`
        SELECT * FROM "clients"
        WHERE id = $1
    `,
        [id]
    );
}

export async function insertClient(client) {
    return connection.query(`
        INSERT INTO "clients" ("name", "address", "phone")
        VALUES ($1, $2, $3)
    `,
        [
            client.name,
            client.address,
            client.phone
        ]
    );
}