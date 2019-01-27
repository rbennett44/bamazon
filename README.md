# bamazon

Bamazon is an app utilizing MySQL that acts very similar to Amazon.  The app takes orders from customers and depletes stock from the inventory.  Here is how it works.

## Let's Go Shopping With Bamazon
This app is run completely through the terminal.  Please see the images below to help with navigation.

First, enter in the node command "node bamazonCustomer.js" after navigating to the proper folder.

<img src="/images/node-command.jpg">

At this point the app will send a message that it has succesfully connected with the MySQL database and you will be brought to the "catalogue" page that lists the products available: the unique id, product name, department they are found in, price, and the quantity currently available.  At the bottom, you will be prompted to buy something.

<img src="/images/no-command-results.jpg">

Then, you can make a purchase by typing in the name of the product you wish to buy.  Then you will be asked to type in the quantity.  The page will then update to include the product list  which has been adjusted to show the new quantity. And, like all good businesses,  you will be prompted to buy more. 

<img src="/images/purchase-and-results.jpg">

Should you choose a product that is not on the list, or enter an inquiry the app does not recognize, the following message will display. 

<img src="/images/invalid-selection.jpg">

Also, should the product you purchase be out of stock, or if you order more than what is in stock, the following message will be displayed. 

<img src="/images/out-of-stock.jpg">

Finally, if you wish to exit the app, please press Q (upper case) and you will leave the app.  

<img src="/images/quit.jpg">



