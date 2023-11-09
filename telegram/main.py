import sys
from telethon.sessions import StringSession
from telethon.sync import TelegramClient
from credentials import *
from utility import *

if len(sys.argv) != 6:
    sys.exit()

TELEGRAM_CHANNEL = sys.argv[1]
MESSAGE_ID = int(sys.argv[2])
CATEGORY = to_string(sys.argv[3])
LIST_OF_ELFBARS = to_string(sys.argv[4])
PRICE = sys.argv[5]

MESSAGE = convert_to_emoji(CATEGORY) + '------------------\n' + LIST_OF_ELFBARS + convert_to_emoji(PRICE)

with TelegramClient(StringSession(SESSION), API_ID, API_HASH) as client:
    client.parse_mode = CustomMarkdown()
    client.edit_message(TELEGRAM_CHANNEL, MESSAGE_ID, MESSAGE)