
INSERT INTO Artist (name) VALUES('Yebba');
INSERT INTO Artist (name) VALUES('Brandi Carlile');
INSERT INTO Artist (name) VALUES('Ella Fitzgerald');
INSERT INTO Artist (name) VALUES('Otis Redding');
INSERT INTO Artist (name) VALUES('Aretha Franklin');
INSERT INTO Artist (name) VALUES('Nina Simone');

Select * from Artist order by name desc limit 10
Select * from Artist order by name asc limit 5

select * from Artist where name like 'black%'