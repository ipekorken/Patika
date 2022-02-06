SELECT rating FROM film_list GROUP BY rating;
SELECT price, length FROM film_list GROUP BY price, length  HAVING length > 50;
SELECT COUNT (*) FROM customer_list GROUP BY sid;