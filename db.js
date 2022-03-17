const Sequelize = require('Sequelize');

const db = new Sequelize('shopdb','shopper','shoppass',{
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
});

const user = db.define('users',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    }
})

const product = db.define('products',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    manufacturer:{
        type: Sequelize.STRING,
    },
    price:{
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    }
})

db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    user , product
}

