SELECT title, description FROM film_list;
SELECT * FROM film_list WHERE length > 60 AND length < 75;
SELECT * FROM film_list WHERE rating = 'G' AND (price = 2.99 OR price = 0.99);
SELECT address FROM customer_list WHERE name = 'Mary Smith';
SELECT * FROM film_list WHERE length <= 50 AND (rating != 'G' OR rating != 'NC-17');