'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    const DataTypes = Sequelize.DataTypes;
    
    return queryInterface.createTable("profissional", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nome:{
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      telefone:{
        type: DataTypes.STRING(20),
        allowNull: false
      },
      email:{
        type: DataTypes.STRING(80),
        allowNull: false,
        unique: true
      },
      tipoDeProfissional:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      situacao:{
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    
    return await queryInterface.dropTable('profissional');
  }
};
