
module.exports = (sequelize, DataTypes) => {

    const Profisisonal = sequelize.define("Profissional", {
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
    }, {
        timestamps: true,
        freezeTableName: true,
        tableName: "profissional"
    });

    return Profisisonal;
}