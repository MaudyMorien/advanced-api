const Sequelize = require('sequelize')
const sequelize = require('../db')

const Company = sequelize.define('company', {
    companyId: {
        type: Sequelize.INTEGER,
        field: 'company_id'
    },
    name: {
        type: Sequelize.STRING,
        field: 'name',
        allowNull: false
    },
    foundingYear: {
        type: Sequelize.INTEGER,
        field: 'founding_year',
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        field: 'fdescription',
        allowNull: true
    }
},
    {
        timestamps: false,
        tableName: 'companies'
    })

module.exports = Company