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

export async function findClientOrders(id) {
    return connection.query(`
        SELECT
            orders.id AS "orderId", orders.quantity, orders."createdAt", orders."totalPrice", cakes.name AS "cakeName"
        FROM orders
        JOIN cakes ON cakes.id = orders."cakeId"
        WHERE orders."clientId" = $1
        ORDER BY orders."createdAt" DESC
    `,
        [id]
    );
}