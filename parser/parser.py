import pandas as pd
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="embappi228"
)

categories_berlin = set()
categories_munich = set()
tastes = set()
elfbars = set()

xls = pd.ExcelFile('./НАЛИЧИЕ ДЛЯ ТЕЛЕГИ.xlsx')
data_berlin = pd.read_excel(xls, 'BERLIN')
data_munich = pd.read_excel(xls, 'MUNICH')
df_berlin = pd.DataFrame(data_berlin, columns=['НАИМЕНОВАНИЕ', 'ВКУС', 'COUNT'])
df_munich = pd.DataFrame(data_munich, columns=['НАИМЕНОВАНИЕ', 'ВКУС', 'COUNT'])

for ind in df_berlin.index:
    category = str(df_berlin['НАИМЕНОВАНИЕ'][ind])
    if category != 'nan':
        categories_berlin.add(category)
    taste = str(df_berlin['ВКУС'][ind])
    if taste != 'nan':
        taste = ''.join(["'" + char if char == "'" else char for char in taste])
        tastes.add(taste)

for ind in df_munich.index:
    category = str(df_munich['НАИМЕНОВАНИЕ'][ind])
    if category != 'nan':
        categories_munich.add(category)
    taste = str(df_munich['ВКУС'][ind])
    if taste != 'nan':
        taste = ''.join(["'" + char if char == "'" else char for char in taste])
        tastes.add(taste)

categories_berlin = sorted(categories_berlin)
categories_munich = sorted(categories_munich)
tastes = sorted(tastes)


mycursor = mydb.cursor()
mycursor.execute('USE elfbars_api')

for category in categories_berlin:
    sql = 'INSERT INTO categories (title, tg_chat_id) VALUES (\'' + category + '\', 1)'
    mycursor.execute(sql)

for category in categories_munich:
    sql = 'INSERT INTO categories (title, tg_chat_id) VALUES (\'' + category + '\', 2)'
    mycursor.execute(sql)

for taste in tastes:
    sql = 'INSERT INTO tastes (title) VALUES (\'' + taste + '\');'
    print(sql)
    #mycursor.execute(sql)



#mydb.commit()