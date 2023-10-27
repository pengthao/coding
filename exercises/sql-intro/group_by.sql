/*Group by q.1*/

select sum(total),
billing_state
from invoice
group by billing_state;

/*Group by q.2*/

with albumTitle as (
  select * from album
),

trackCte as(
select album_id, milliseconds
from track
)

select avg(trackCTE.milliseconds) AS avg_milliseconds,
albumTitle.title
from albumTitle
join trackCte on albumTitle.album_id = trackCte.album_id
GROUP BY albumTitle.title;

/*Group by q.3*/

with artistCte as (
  select * from artist
),

albumCte as (
  select * from album
  where artist_id in ('8', '12')

),

trackCte as(
select album_id from track
)

select count(trackCTE.album_id) AS albumCount,
artistCte.name As artistName
from albumCte
join artistCte on albumCte.artist_id = artistCte.artist_id
join trackCte on albumCte.album_id = trackCte.album_id
GROUP BY artistCte.name;