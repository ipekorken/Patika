SELECT AVG(price) FROM film_list;
SELECT COUNT(*) FROM film_list WHERE title LIKE 'C%';
SELECT DISTINCT length FROM film_list WHERE price = 0.99 ORDER BY length DESC LIMIT 1;
SELECT COUNT (DISTINCT price) FROM film_list WHERE length > 150;