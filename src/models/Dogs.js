const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dogs",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      origin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      height: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      weight: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      life_span: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      temperament: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false, //no necesitamos updatedAt ni createdAt
      freezeTableName: true, //para evitar que sequelize agregue nombres plurales a su criterio
    }
  );
};
