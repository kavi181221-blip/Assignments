select
start_date,
end_date,
timestampdiff(year,start_date,end_date) as Num_year,
timestampdiff(month,start_date,end_date) as Num_month,
datediff(end_date,start_date)as Num_days
from date_calculator;
