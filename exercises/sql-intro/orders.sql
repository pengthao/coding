CREATE TABLE orders (
    order_id SERIAL Primary Key,
    person_id INT REFERENCES person_tbl(id),
    product_name varchar(255),
    product_price decimal(8, 2),
    quantity INT
)

Insert INTO orders (person_id, product_name, product_price, quantity)
values('2', 'iphone', '600', '1');
Insert INTO orders (person_id, product_name, product_price, quantity)
values('2', 'galaxy s10', '450', '1');
Insert INTO orders (person_id, product_name, product_price, quantity)
values('4', 'galaxy buds', '150', '2');
Insert INTO orders (person_id, product_name, product_price, quantity)
values('3', 'blackberry', '100', '1');
Insert INTO orders (person_id, product_name, product_price, quantity)
values('1', 'pixel', '500', '1');
Insert INTO orders (person_id, product_name, product_price, quantity)
values('3', 'pager', '10', '100');

Select SUM(quantity) as products_ordered;

select sum(product_price) as total_price;

select product_price * quantity group by person_id;


