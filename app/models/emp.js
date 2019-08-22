'use strict';
const Sequelize = require('sequelize')

module.exports = function (sequelize, DataTypes) {
    let Emp = sequelize.define("Emp", {
        id: {
            type: Sequelize.INTEGER,
             primaryKey: true,
             autoIncrement: true
        },
        emp_name: {
            type: Sequelize.STRING(255),
            allowNull: false,
            
        },
        emp_dept:{
            type: Sequelize.STRING(255),
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false
        },
        updatedAt: Sequelize.DATE
    }, {
            freezeTableName: true
        });

       


    return Emp;
};