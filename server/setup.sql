-- Create indices
CREATE INDEX idx_Persons_id ON Persons(id);
CREATE INDEX idx_RanksSingle_eventId ON RanksSingle(eventId);
CREATE INDEX idx_RanksSingle_personId ON RanksSingle(personId);
CREATE INDEX idx_RanksAverage_eventId ON RanksAverage(eventId);
CREATE INDEX idx_RanksAverage_personId ON RanksAverage(personId);
CREATE INDEX idx_Persons_countryId ON Persons(countryId);

-- add countryId column and populate
ALTER TABLE RanksSingle ADD COLUMN countryId TEXT;
UPDATE RanksSingle SET countryId = (SELECT countryId FROM Persons WHERE id = RanksSingle.personId);

ALTER TABLE RanksAverage ADD COLUMN countryId TEXT;
UPDATE RanksAverage SET countryId = (SELECT countryId FROM Persons WHERE id = RanksAverage.personId);

-- add continentId column and populate
ALTER TABLE RanksSingle ADD COLUMN continentId TEXT;
UPDATE RanksSingle SET continentId = (SELECT continentId FROM Countries WHERE id = RanksSingle.countryId);

ALTER TABLE RanksAverage ADD COLUMN continentId TEXT;
UPDATE RanksAverage SET continentId = (SELECT continentId FROM Countries WHERE id = RanksAverage.countryId);
