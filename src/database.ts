import mysql from "mysql2";

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "szkola",
});

export const getUsers = async () => {
    const sql = "SELECT * FROM users";
    const [rows] = await connection.promise().query(sql)
    return rows
};

export const createUser = async (username: string, _password: string) => {
    const sql = "INSERT INTO users (id, username) VALUES(NULL, ?);";
    const [row] = await connection.promise().query(sql, [username]);
    return row;
};

export const deleteUsers = async () => {
    const sql = "DELETE FROM users";
    const [row] = await connection.promise().query(sql);
    return row
}