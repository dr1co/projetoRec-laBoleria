import connection from '../databases/postgres.js';

export async function findCakeByName(name) {
    return connection.query(`
        SELECT * FROM "cakes"
        WHERE name = $1
    `,
        [name]
    )
}

export async function findCakeById(id) {
    return connection.query(`
        SELECT * FROM "cakes"
        WHERE id = $1
    `,
        [id]
    );
}

export async function insertCake(cake) {
    return connection.query(`
        INSERT INTO "cakes" ("flavourId", "name", "price", "image", "description")
        VALUES ($1, $2, $3, $4, $5)
    `,
        [
            cake.flavourId,
            cake.name,
            cake.price,
            cake.image,
            cake.description
        ]
    )
}