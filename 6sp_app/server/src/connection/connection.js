const mysql = require('mysql2');

const mysqlConnection=mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'Mango123',
    database:'Risk_Predictor',

});

mysqlConnection.connect(function(error){
    if(error){
        console.log(error);
    }else{

        console.log('Connected to the databse : Risk_Predictor');

    }
});

module.exports = mysqlConnection;