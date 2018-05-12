module.exports = (sequelize, DataTypes) =>{

    const Transaction = sequelize.define('Transaction', {
        deposit: {
            thisTransaction: DataTypes.BOOLEAN,
            defaultValue: null
        },
        withdraw: {
            thisTransaction: DataTypes.BOOLEAN,
            defaultValue: null
        },
        description: DataTypes.STRING
    });
  
    Transaction.associate = (models) => {
        Transaction.hasOne(models.Account);
    };
    return Transaction;
  };