'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert("profissional", [{
      nome: "Tyrone Amorim",
      telefone: "21123456789",
      email: "tyroneamorim@outlook.com",
      tipoDeProfissional: 1,
      situacao: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('profissional', null, {});
  }
};
