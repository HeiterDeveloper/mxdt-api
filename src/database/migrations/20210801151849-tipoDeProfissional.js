'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const DataTypes = Sequelize.DataTypes;

    await queryInterface.createTable("tipo_de_profissional", {
      id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      descricao:{
        type: DataTypes.STRING(50),
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

     await queryInterface.dropTable('tipo_de_profissional');
  }
};
