select first_name,
    last_name
from employee
where city = 'Calgary';

select * from employee
where birth_date = (select min(birth_date) from employee)

select * from employee
order by birth_date
limit 1;

select * from employee
order by birth_date desc
limit 1;


with NancyEdwardsCTE As(
    select employee_id
    from employee
    where first_name = 'Nancy' and last_name = 'Edwards'
)

select *
from employee
where reports_to = (select employee_id from NancyEdwardsCTE);


select count(employee_id) from employee where city = 'Lethbridge';



