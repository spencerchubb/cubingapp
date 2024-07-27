import sqlite3
import time

def deduplicate_preserve_order(my_list):
    d = {}
    for item in my_list:
        d[item] = True
    return list(d.keys())

def dicts_to_dict(dicts, key):
    '''
    Convert a list of dictionaries to one dictionary.
    Use the specified key as the key of the output dictionary.
    '''
    output = {}
    for d in dicts:
        if d[key] in output:
            continue
        output[d[key]] = d
    return output

def reorder_dict(dictionary, keys):
    output = {}
    for key in keys:
        output[key] = dictionary[key]
    return output

def populate_birthdays_table():
    conn = sqlite3.connect('wca.db')
    c = conn.cursor()

    print('Get person ids')
    start = time.time()
    c.execute('SELECT personId FROM RanksSingle ORDER BY worldRank')
    person_ids = [row[0] for row in c.fetchall()]
    person_ids = deduplicate_preserve_order(person_ids)
    print(round(time.time() - start, 2))

    print('Fetch competition data')
    start = time.time()
    c.execute('SELECT DISTINCT competitionId, personId FROM Results')
    comps = c.fetchall()
    c.execute('SELECT id, startDate FROM Competitions')
    comp_dates = {row[0]: row[1] for row in c.fetchall()}
    comps = [{ 'competitionId': row[0], 'personId': row[1], 'date': comp_dates[row[0]]} for row in comps]
    print(round(time.time() - start, 2))

    print('Sort by date')
    start = time.time()
    comps = sorted(comps, key=lambda row: row['date'])
    print(round(time.time() - start, 2))

    print('Get first comp for each person')
    start = time.time()
    comps = dicts_to_dict(comps, 'personId')
    print(round(time.time() - start, 2))

    print('Reorder')
    start = time.time()
    comps = reorder_dict(comps, person_ids)
    print(round(time.time() - start, 2))

    print('Creating table')
    start = time.time()
    c.execute('DROP TABLE IF EXISTS Birthdays;')
    c.execute('CREATE TABLE Birthdays(competitionId TEXT, personId TEXT, date TEXT);')

    # Format for sql
    comps = list(comps.values())
    comps = [f"('{row['competitionId']}', '{row['personId']}', '{row['date']}')" for row in comps]

    c.execute(f'INSERT INTO Birthdays (competitionId, personId, date) VALUES {",".join(comps)};')
    conn.commit()
    print(round(time.time() - start, 2))

populate_birthdays_table()