




# database.py

import psycopg2
from psycopg2 import OperationalError, errorcodes, errors

try:
    #Old DB
    #conn = psycopg2.connect('postgres://lq@mahmud.db.elephantsql.com/lq')
    #New DB
    conn = psycopg2.connect('postgres://tgpxaiud:5M@bubble.db.elephantsql.com/tgpxaiud')
    print('Connection Success!')
    connectionsucceeded = True

except:
   print("Unable to connect to the database")

# Open a cursor to execute SQL queries
cur = conn.cursor()
