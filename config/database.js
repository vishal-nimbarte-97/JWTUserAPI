const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("JWTUSERAPI", "postgres", "2001", {
  host: "localhost",
  dialect: "postgres",
});

const connnection = async ()=>{
    try {
        await sequelize.sync();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

module.exports = {sequelize,connnection};