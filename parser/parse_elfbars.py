import pandas as pd
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="embappi228"
)

xls = pd.ExcelFile('./НАЛИЧИЕ ДЛЯ ТЕЛЕГИ.xlsx')
data_berlin = pd.read_excel(xls, 'BERLIN')
data_munich = pd.read_excel(xls, 'MUNICH')
df_berlin = pd.DataFrame(data_berlin, columns=['НАИМЕНОВАНИЕ', 'ВКУС', 'COUNT'])
df_munich = pd.DataFrame(data_munich, columns=['НАИМЕНОВАНИЕ', 'ВКУС', 'COUNT'])

mycursor = mydb.cursor()

mycursor.execute('USE elfbars_api')

for ind in df_berlin.index:
    category = str(df_berlin['НАИМЕНОВАНИЕ'][ind])
    taste = str(df_berlin['ВКУС'][ind])
    taste = ''.join(["'" + char if char == "'" else char for char in taste])
    count = str(df_berlin['COUNT'][ind])
    if category == 'nan' or taste == 'nan' or count == 'nan':
        continue
    if float(count) <= 0:
        continue
    mycursor.execute('SELECT id FROM categories WHERE title = \'' + category + '\' AND tg_chat_id = 1')
    category_id = str(mycursor.fetchall()[0][0])
    mycursor.execute('SELECT id FROM tastes WHERE title = \'' + taste + '\'')
    taste_id = str(mycursor.fetchall()[0][0])
    mycursor.execute('INSERT INTO elfbars (category_id, taste_id, count) VALUES (\'' + category_id + '\', \'' + taste_id + '\', ' + str(count) + ')')

for ind in df_munich.index:
    category = str(df_munich['НАИМЕНОВАНИЕ'][ind])
    taste = str(df_munich['ВКУС'][ind])
    taste = ''.join(["'" + char if char == "'" else char for char in taste])
    count = str(df_munich['COUNT'][ind])
    if category == 'nan' or taste == 'nan' or count == 'nan':
        continue
    if float(count) <= 0:
        continue
    mycursor.execute('SELECT id FROM categories WHERE title = \'' + category + '\' AND tg_chat_id = 2')
    category_id = str(mycursor.fetchall()[0][0])
    mycursor.execute('SELECT id FROM tastes WHERE title = \'' + taste + '\'')
    taste_id = str(mycursor.fetchall()[0][0])
    mycursor.execute('INSERT INTO elfbars (category_id, taste_id, count) VALUES (\'' + category_id + '\', \'' + taste_id + '\', ' + str(count) + ')')

mydb.commit()