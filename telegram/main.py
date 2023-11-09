from telethon.extensions import markdown
from telethon import types
from credentials import *
from telethon.sync import TelegramClient
from telethon.sessions import StringSession
from utility import *
from telethon.sessions import StringSession

with TelegramClient(StringSession(SESSION), API_ID, API_HASH) as client:
    client.parse_mode = CustomMarkdown()
    client.send_message('rzhadkpi', 'Guys, I love to ' + convert_to_emoji('fuck') + ' ruslan(' + convert_to_emoji('rzhadkpi') + ')')