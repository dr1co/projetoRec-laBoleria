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

export async function findOrders(date) {
    if (date) {
        return connection.query(`
            SELECT
                clients.id AS "clientId", clients.name AS "clientName", clients.address, clients.phone,
                cakes.id AS "cakeId", cakes.name AS "cakeName", cakes.price, cakes.description, cakes.image,
                flavours.name AS flavour,
                orders.id AS "orderId", orders."createdAt", orders.quantity, orders."totalPrice"
            FROM orders
            JOIN clients ON clients.id = orders."clientId"
            JOIN cakes ON cakes.id = orders."cakeId"
            JOIN flavours ON flavours.id = cakes."flavourId"
            WHERE orders."createdAt" = $1
            ORDER BY orders."createdAt" DESC
        `,
            [date]
        );
    } else {
        return connection.query(`
            SELECT
                clients.id AS "clientId", clients.name AS "clientName", clients.address, clients.phone,
                cakes.id AS "cakeId", cakes.name AS "cakeName", cakes.price, cakes.description, cakes.image,
                flavours.name AS flavour,
                orders.id AS "orderId", orders."createdAt", orders.quantity, orders."totalPrice"
            FROM orders
            JOIN clients ON clients.id = orders."clientId"
            JOIN cakes ON cakes.id = orders."cakeId"
            JOIN flavours ON flavours.id = cakes."flavourId"
            ORDER BY orders."createdAt" DESC
        `);
    }
}