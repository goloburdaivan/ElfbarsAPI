from telethon.sessions import StringSession
from telethon.sync import TelegramClient
from credentials import *

with TelegramClient(StringSession(SESSION), API_ID, API_HASH) as client:
    for message in client.iter_messages('rzhadkpi'):
        print(message.id, ':', message.text)