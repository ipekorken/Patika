SELECT country FROM customer_list WHERE country LIKE 'A%a';
SELECT country FROM customer_list WHERE country LIKE '%_____n';
SELECT title FROM film_list WHERE title ILIKE '%t%t%t%t%';
SELECT * FROM film_list WHERE title LIKE 'C%' AND length > 90 AND price = 2.99;