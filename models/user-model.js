const db = require('../config/connection.js');

class UserModel {
    static async findUsers() {
        const sql = `SELECT * FROM users`;
        const results = await db.query(sql);
        return results.rows;
    }
    static async findById(id) {
        const sql = 'SELECT * FROM users WHERE id=$1';
        const results = await db.query(sql, [id]);
        return results.rows;
    }
    static async store(params) {
        const { email, gender, password, role } = params;
        const sql = 'INSERT INTO users (email, gender, password, role) VALUES($1, $2, $3, $4) RETURNING *';
        const results = await db.query(sql, [email, gender, password, role]);
        return results.rows;
    }
    static async update(params, where) {
        const columns = Object.keys(params);
        const values = Object.values(params);
        const whereColumn = Object.keys(where);
        const whereValue = Object.values(where);
        const updates = columns.map((column, index) => `${column} = $${index + 1}`).join(', ');

        const query = `UPDATE users SET ${updates} WHERE ${whereColumn[0]} = ${whereValue[0]} RETURNING *`;
        const val = [...values];
        const result = await db.query(query, val);
        return result.rows;
    }
    static async delete(id) {
        const sql = 'DELETE FROM users WHERE id=$1';
        const results = await db.query(sql, [id]);
        return results;
    }
}
module.exports = UserModel;