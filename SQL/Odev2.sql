SELECT * FROM film_list WHERE price BETWEEN 0.99 AND 2.99;
SELECT * FROM actor_info WHERE first_name IN ('Penelope','Nick','Ed');
SELECT * FROM film_list WHERE price IN (0.99, 2.99, 4.99) AND rating IN ('G', 'PG-13', 'NC-17');