update customer
set fax = null
where fax is not null 
/* if we were going to change them all to null then we didnt need the condition
all values would be null*/

update customer
set company = 'self'
where company is null;

update customer
set last_name = 'Thompson'
where first_name ='Julia' and last_name = 'Barnett';

update customer
set support_rep_id = '4'
where email = 'luisrojas@yahoo.cl'

/*problem 5 tried using cte and alias but it didnt work

with genreCte as (
  select * from genre
  where name = 'Metal'
),

trackCte as(
select t.album_id,
t.name as songTitle,
t.genre_id,
t.composer
from track t
join genreCte gc on t.genre_id = gc.genre_id
where t.composer is null
)

select * from trackCte;
*/
UPDATE track
SET composer = 'The darkness around us'
WHERE genre_id IN (SELECT genre_id FROM genre where name = 'Metal') AND composer IS NULL;




