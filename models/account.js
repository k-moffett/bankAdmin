module.exports = (sequelize, DataTypes) =>{

    const Account = sequelize.define('Account', {
        name: DataTypes.STRING,
        type: DataTypes.STRING
    });
  
    Account.associate = (models) => {
        Account.hasOne(models.User);
    };
    return Account;
  };