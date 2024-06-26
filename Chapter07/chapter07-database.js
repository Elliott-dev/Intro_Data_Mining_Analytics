use MyBusiness;

db.createCollection('Products');
db.Products.insert({ "_id": 1, "ProductID": 1, "ProductName": "MongoDB Podcast", "Description": "Covers NoSQL Queries", "Price": 19.99 } );
db.Products.insert({ "_id": 2, "ProductID": 2, "ProductName": "Visualization Podcast", "Description": "Examines Common Visualizations", "Price": 29.99 } );
db.Products.insert({ "_id": 3, "ProductID": 3, "ProductName": "MySQL Podcast", "Description": "Common Query Operations", "Price": 39.99 } );
db.Products.insert({ "_id": 4, "ProductID": 4, "ProductName": "Excel Podcast", "Description": "Presents Excel Pivot Tables", "Price": 49.99 } );
db.Products.insert({ "_id": 5, "ProductID": 5, "ProductName": "Database Podcast", "Description": "Overview of database process", "Price": 59.99 } );

db.createCollection('Sales');
db.Sales.insert( { "_id": 1, "SalesPerson": 101,  "Region": "West", "CustomerID": 401, "ProductID": 1, "Total": 19.99, "SaleDate": "12-01-2020" } );
db.Sales.insert( { "_id": 2, "SalesPerson": 102,  "Region": "West", "CustomerID": 403, "ProductID": 2, "Total": 29.99, "SaleDate": "11-01-2020" } );
db.Sales.insert( { "_id": 3, "SalesPerson": 103,  "Region": "West", "CustomerID": 403, "ProductID": 3,  "Total": 39.99, "SaleDate": "10-01-2020" } );
db.Sales.insert( { "_id": 4, "SalesPerson": 104,  "Region": "West", "CustomerID": 401, "ProductID": 4,  "Total": 49.99, "SaleDate": "09-01-2020" } );
db.Sales.insert( { "_id": 5, "SalesPerson": 105,  "Region": "West", "CustomerID": 401, "ProductID": 5,  "Total": 59.99, "SaleDate": "08-01-2020" } );
db.Sales.insert( { "_id": 6, "SalesPerson": 106,  "Region": "West", "CustomerID": 402, "ProductID": 1,  "Total": 19.99, "SaleDate": "06-01-2020" } );
db.Sales.insert( { "_id": 7, "SalesPerson": 107,  "Region": "West", "CustomerID": 402, "ProductID": 2,  "Total": 29.99, "SaleDate": "07-01-2020" } );
db.Sales.insert( { "_id": 8, "SalesPerson": 108,  "Region": "West", "CustomerID": 402, "ProductID": 3,  "Total": 39.99, "SaleDate": "08-01-2020" } );
db.Sales.insert( { "_id": 9, "SalesPerson": 109,  "Region": "West", "CustomerID": 402, "ProductID": 4,  "Total": 49.99, "SaleDate": "09-01-2020" } );

db.createCollection('Employees');
db.Employees.insert( { "_id": 10101, "Name": "Janet Clive", "State": "California", "Position": "Sales", "Phone": "555-1216", "Region": "West", "Email": "JS@MyBusiness.com" } );
db.Employees.insert( { "_id": 12345, "Name": "Betty Love", "State": "Boston",  "Position": "Sales", "Phone": "555-1217", "Region": "East",  "Email": "BD@MyBusiness.com" } );
db.Employees.insert( { "_id": 10301, "Name": "Mary Smith", "State": "Florida",  "Position": "Supervisor", "Phone": "555-1218", "Region": "South",  "Email": "MA@MyBusiness.com" } );
db.Employees.insert( { "_id": 10401, "Name": "Josh Camper", "State": "AZ",  "Position": "Sales", "Phone": "555-1236", "Region": "West",  "Email": "JC@MyBusiness.com" } );
db.Employees.insert( { "_id": 10501, "Name": "Brian Lewis", "State": "Washington",  "Position": "Sales", "Phone": "555-1237",  "Region": "North", "Email": "BL@MyBusiness.com" } );
db.Employees.insert( { "_id": 10601, "Name": "Martha Swan", "State": "Arizona",  "Position": "Supervisor", "Phone": "555-1238", "Region": "West",  "Email": "MS@MyBusiness.com" } );
db.Employees.insert( { "_id": 10701, "Name": "Veronica Clarence", "State": "AZ", "Position": "Sales",  "Phone": "555-1226",  "Region": "South", "Email": "VC@MyBusiness.com" } );
db.Employees.insert( { "_id": 10801, "Name": "Mike Jones",  "State": "California", "Position": "Sales", "Phone": "555-1227",  "Region": "East", "Email": "MJ@MyBusiness.com" } );
db.Employees.insert( { "_id": 10901, "Name": "Mary Hayes", "State": "Arizona", "Position":  "Sales", "Phone": "555-1228",  "Region": "North", "Email": "MH@MyBusiness.com" } );


db.createCollection('SalesTeam');
db.SalesTeam.insert( { "_id": 10101, "SalesPerson": 10101, "Name": "Janet Clive", "Phone": "555-1216", "Region": "West", "Email": "JS@MyBusiness.com" } );
db.SalesTeam.insert( { "_id": 10201, "SalesPerson": 10201, "Name": "Betty Love", "Phone": "555-1217", "Region": "East",  "Email": "BD@MyBusiness.com" } );
db.SalesTeam.insert( { "_id": 10301, "SalesPerson": 10301, "Name": "Mary Smith", "Phone": "555-1218", "Region": "South",  "Email": "MA@MyBusiness.com" } );
db.SalesTeam.insert( { "_id": 10401, "SalesPerson": 10401, "Name": "Josh Camper", "Phone": "555-1236", "Region": "West",  "Email": "JC@MyBusiness.com" } );
db.SalesTeam.insert( { "_id": 10501, "SalesPerson": 10501, "Name": "Brian Lewis", "Phone": "555-1237",  "Region": "North", "Email": "BL@MyBusiness.com" } );
db.SalesTeam.insert( { "_id": 10601, "SalesPerson": 10601, "Name": "Martha Swan", "Phone": "555-1238", "Region": "West",  "Email": "MS@MyBusiness.com" } );
db.SalesTeam.insert( { "_id": 10701, "SalesPerson": 10701, "Name": "Veronica Clarence", "Phone": "555-1226",  "Region": "South", "Email": "VC@MyBusiness.com" } );
db.SalesTeam.insert( { "_id": 10801, "SalesPerson": 10801, "Name": "Mike Jones", "Phone": "555-1227",  "Region": "East", "Email": "MJ@MyBusiness.com" } );
db.SalesTeam.insert( { "_id": 10901, "SalesPerson": 10901, "Name": "Mary Hayes", "Phone": "555-1228",  "Region": "North", "Email": "MH@MyBusiness.com" } );

db.createCollection("Customers");
db.Customers.insert( { "_id": 401, "Name": "Monica Davis", "Phone": "555-1212", "Email": "MD@gmail.com" });
db.Customers.insert( { "_id": 402, "Name": "Jimmy Lewis", "Phone": "555-1213", "Email": "JL@gmail.com" });
db.Customers.insert( { "_id": 403, "Name": "Sara Knight", "Phone": "555-1214", "Email": "SK@gmail.com" });
db.Customers.insert( { "_id": 404, "Name": "Billy Williams", "Phone": "555-1214", "Email": "BW@gmail.com" });



db.createCollection("Students");
db.Students.insert( { "StudentID": 501, "Name": "Monica Davis", "Year": "F", "Phone": "555-1212", "Email": "MD@gmail.com" });
db.Students.insert( { "StudentID": 502, "Name": "Jimmy Lewis", "Year": "So", "Phone": "555-1213", "Email": "JL@gmail.com" });
db.Students.insert( { "StudentID": 503, "Name": "Sara Knight", "Year": "J", "Phone": "555-1214", "Email": "SK@gmail.com" });
db.Students.insert( { "StudentID": 504, "Name": "Billy Williams", "Year": "S", "Phone": "555-1214", "Email": "BW@gmail.com" });