
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    emailAddress: { type: DataTypes.STRING, allowNull: false },
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        User.hasMany(models.Client, {
          foreignKey: 'caseManagerId',
          as: 'clients',
        });
      },
    },
  });
  return User;
};
