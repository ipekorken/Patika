SELECT DISTINCT price FROM film_list;
SELECT COUNT(DISTINCT price) FROM film_list;
SELECT COUNT (*) FROM film_list WHERE title LIKE 'T%' AND rating = 'G';
SELECT COUNT (*) FROM customer_list WHERE country LIKE '%_____';
SELECT COUNT (*) FROM customer_list WHERE city ILIKE '%r';