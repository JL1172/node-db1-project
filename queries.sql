-- Database Queries

-- Find all customers with postal code 1010
SELECT * FROM customers where postalcode = 1010;
-- Find the phone number for the supplier with the id 11
SELECT * FROM SUPPLIERS WHERE supplierid = 11 and phone like '%(010) 9984510%'
-- List first 10 orders placed, sorted descending by the order date
SELECT * FROM ORDERS ORDER BY orderdate DESC LIMIT 10;
-- Find all customers that live in London, Madrid, or Brazil
SELECT * FROM CUSTOMERS WHERE city LIKE '%london%' OR city LIKE '%madrid%' OR country LIKE '%brazil%'
-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
INSERT INTO customers (customername, contactname, address,city,postalcode,country) VALUES ('The Shire','Biblo Baggins','1 Hobbit-Hole','Bag End','111','Middle Earth');
-- Update Bilbo Baggins record so that the postal code changes to "11122"
UPDATE customers SET postalcode = '11122' WHERE customerid = 92;
-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted
SELECT COUNT(DISTINCT city) AS NumberOfDistinctCities FROM customers;
-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
SELECT COUNT(*)
FROM Suppliers
WHERE LENGTH(SupplierName) > 20;