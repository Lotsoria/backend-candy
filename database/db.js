import {Sequelize} from 'sequelize'

const db = new Sequelize('barberia', 'root', '',{
    host:'localhost',
    dialect: 'mysql',
    port:'3307'
})

export default db