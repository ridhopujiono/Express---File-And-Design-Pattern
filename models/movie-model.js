const db = require('../config/connection.js');

class MovieModel {
    static async findMovies() {
        const sql = `SELECT * FROM movies`;
        const results = await db.query(sql);
        return results.rows;
    }
    static async findById(id) {
        const sql = 'SELECT * FROM movies WHERE id=$1';
        const results = await db.query(sql, [id]);
        return results.rows;
    }
    static async store(params) {
        const { title, genres, year, photo } = params;
        const sql = 'INSERT INTO movies (title, genres, year, photo) VALUES($1, $2, $3, $4) RETURNING *';
        const results = await db.query(sql, [title, genres, year, photo]);
        return results.rows;
    }
    static async update(params, where) {
        const columns = Object.keys(params);
        const values = Object.values(params);
        const whereColumn = Object.keys(where);
        const whereValue = Object.values(where);
        const updates = columns.map((column, index) => `${column} = $${index + 1}`).join(', ');

        const query = `UPDATE movies SET ${updates} WHERE ${whereColumn[0]} = ${whereValue[0]} RETURNING *`;
        const val = [...values];
        const result = await db.query(query, val);
        return result.rows;
    }
    static async delete(id) {
        const sql = 'DELETE FROM movies WHERE id=$1';
        const results = await db.query(sql, [id]);
        return results;
    }
}
module.exports = MovieModel;