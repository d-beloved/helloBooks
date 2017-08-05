
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    name: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    emailAddress: { type: DataTypes.STRING, allowNull: false },
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        Client.belongsTo(models.User, {
          foreignKey: 'caseManagerId',
          onDelete: 'CASCADE',
          as: 'caseManager',
        });
      },
    },
  });
  return Client;
};
