CREATE TABLE person_tbl (
    id SERIAL PRIMARY KEY,
    name varchar(255),
    age INT,
    height DECIMAL (5,2),
    favorite_color VARCHAR(255)
)

Insert Into person_tbl (name, age, height, favorite_color)
VALUES('John', 24, 178.5, 'blue');
Insert Into person_tbl (name, age, height, favorite_color)
VALUES('Jane', 30, 130.5, 'red');
Insert Into person_tbl (name, age, height, favorite_color)
VALUES('Robin', 18, 166, 'orange');
Insert Into person_tbl (name, age, height, favorite_color)
VALUES('Bruce', 45, 155.5, 'black');
Insert Into person_tbl (name, age, height, favorite_color)
VALUES('Diana', 64, 190, 'green');

select * from person_tbl
ORDER BY height Desc;

select * from person_tbl
ORDER BY height asc;

select * from person_tbl
ORDER BY age desc;

select * from person_tbl
where age >= '20';

select * from person_tbl
where age = '18';

select * from person_tbl
where age >= '20' && age <= '30';

select * from person_tbl
where age != '27';

select * from person_tbl
where favorite_color != 'red';

select * from person_tbl
where favorite_color != 'red' && favorite_color != 'blue';

select * from person_tbl
where favorite_color != 'orange' || favorite_color != 'green';

select * from person_tbl
where favorite_color in ('green', 'blue', 'green');

select * from person_tbl
where favorite_color in or ('yellow' ,  'purple');



