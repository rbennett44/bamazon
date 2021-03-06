var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connection successful");
    makeTable();
});

var makeTable = function() {
    connection.query("SELECT * FROM products", function(err, res) {
        for(var i = 0; i < res.length; i++) {
            console.log(res[i].item_id+" || "+res[i].product_name+" || "+
            res[i].department_name+" || "+res[i].price+" || "+res[i].stock_quantity+"\n");
        }
    promptCustomer(res);
    });
};

var promptCustomer = function(res) {
    inquirer.prompt([{
        type: 'input',
        name: 'choice',
        message: 'What would you like to purchase? [Quit with Q]'
    }]).then(function(answer) {
        var correct = false;
        //If they type in Q, it exits
        if(answer.choice.toUpperCase()=="Q"){
            process.exit();
        }
        for(var i = 0; i < res.length; i++){
            if(res[i].product_name==answer.choice){
                correct=true;
                var product = answer.choice;
                var id = i;

                //now see how many items they would like to buy
                inquirer.prompt({
                    type: "input",
                    name: "quant",
                    message: 'How many would you like to buy?',
                    validate: function(value) {
                        if(isNaN(value)==false){
                            return true;
                        } else {
                            return false;
                        }
                    }
                }).then(function(answer) {
                    if((res[id].stock_quantity-answer.quant)>0){
                        connection.query("UPDATE products SET stock_quantity='"
                        +(res[id].stock_quantity-answer.quant)+"' WHERE product_name='"+product+"'",
                        function(err,res2){
                            console.log("Product Bought!");
                            makeTable();
                        })
                    } else {
                        console.log("I'm sorry, but we do not have enough product in stock to fill your order. Please try a different product.");
                        promptCustomer(res);
                    }
                });
            }

        }
        //If the selection is not among the choices, it till give them message and then rerun the prompt
        if(i==res.length && correct==false){
            console.log("Not a valid selection!");
            promptCustomer(res);
        }
    });
};