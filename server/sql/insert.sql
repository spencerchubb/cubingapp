-- For prod database
-- $ sqlite3 Prod.db
-- For dev database
-- $ sqlite3 Dev.db

insert into User (time_created)
values (datetime());

insert into AnalyticsEvent (user_id, type, time)
values (1, 'view play', datetime());