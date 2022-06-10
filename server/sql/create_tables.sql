create table User (
    id integer primary key autoincrement,
    time_created datetime
);

create table AnalyticsEvent (
    id integer primary key autoincrement,
    user_id integer references User(id),
    type text,
    time datetime
);