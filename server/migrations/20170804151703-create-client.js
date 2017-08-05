
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER },
      name: { type: Sequelize.STRING, allowNull: false },
      username: { type: Sequelize.STRING, allowNull: false },
      password: { type: Sequelize.STRING, allowNull: false },
      emailAddress: { type: Sequelize.STRING, allowNull: false },
      casePlan: { type: Sequelize.STRING(2000) },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE },
    });
  },
  down: (queryInterface /* , Sequelize */ ) =>
    queryInterface.dropTable('Clients'),
};
