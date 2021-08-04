
module.exports = (sequelize, DataTypes) => {

    const TipoDeProfissional = sequelize.define("TipoDeProfissional", {
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
    }, {
        timestamps: true,
        freezeTableName: true,
        tableName: "tipo_de_profissional"
    });

    return TipoDeProfissional;
}