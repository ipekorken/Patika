SELECT * FROM film_list WHERE title ILIKE '%n' ORDER BY length DESC LIMIT 5;
SELECT * FROM film_list WHERE title ILIKE '%n' ORDER BY length ASC OFFSET 5 LIMIT 5;
SELECT * FROM customer_list WHERE sid = 1 ORDER BY name DESC LIMIT 4;