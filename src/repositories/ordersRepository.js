import connection from '../databases/postgres.js';

export async function insertOrder(order) {
    return connection.query(`
        INSERT INTO "orders" ("clientId", "cakeId", "quantity", "totalPrice")
        VALUES ($1, $2, $3, $4)
    `,
        [
            order.clientId,
            order.cakeId,
            order.quantity,
            order.totalPrice
        ]
    );
}