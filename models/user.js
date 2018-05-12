module.exports = (sequelize, DataTypes) =>{

    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        address: DataTypes.STRING
    });

    User.associate = (models) => {
        User.hasmany(models.Account, {
            onDelete: 'cascade'
        });
    };
    return User;
};