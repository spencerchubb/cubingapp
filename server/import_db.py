import os
import sqlite3
import time

start = time.time()

dirname = 'WCA_export'
filenames = os.listdir(dirname)
filenames = [f for f in filenames if f.endswith('.tsv')]

# Open wca.db
conn = sqlite3.connect('wca.db')
c = conn.cursor()

for filename in filenames:
    table_name = filename.split('.')[0]
    print(f'{table_name} - Current time is {time.time() - start:.2f} seconds')

    # Open file
    with open(dirname + '/' + filename, 'r') as f:
        columns = f.readline().strip().split('\t')
        c.execute(f'DROP TABLE IF EXISTS {table_name}')
        c.execute(f'CREATE TABLE {table_name} ({",".join(columns)})')

        values_list = []

        def execute_batch():
            sql_str = f'INSERT INTO {table_name} ({",".join(columns)}) VALUES ({",".join(["?"] * len(columns))})'
            c.executemany(sql_str, values_list)

        for line in f:
            line = line.strip()
            values = line.split('\t')
            # Cast to int if possible
            for i, value in enumerate(values):
                if value.isdigit():
                    values[i] = int(value)
            values_list.append(values)

            # Executing commands in batches helps performance.
            # But making the batch size too large hurts performance.
            if len(values_list) >= 128:
                execute_batch()
                values_list = []

        execute_batch()

conn.commit()

print(f'Finished in {time.time() - start:.2f} seconds')