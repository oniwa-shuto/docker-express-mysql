const connection = require('./db');

module.exports = {
  createUser: (body, callback) => {
    connection.query(
      `INSERT INTO users SET name = '${body.name}', email = '${body.email}', password = '${body.password}'`,
      callback
    );
  },
  get: (callback) => {
    connection.query(`select * from users`, callback);
  },
  findOne: (email, name, password, callback) => {
    connection.query(
      `select * from users where email = '${email}' and name = '${name}' and password = '${password}'`,
      callback
    );
  },
  findUser: (email, password, callback) => {
    connection.query(
      `select * from users where email = '${email}' and password = '${password}'`,
      callback
    );
  },
};
