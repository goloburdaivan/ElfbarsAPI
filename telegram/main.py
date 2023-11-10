import sys
import telethon
from telethon.sessions import StringSession
from telethon.sync import TelegramClient
from credentials import *
from utility import *
from resources.links import *

if len(sys.argv) != 6:
    sys.exit()

TELEGRAM_CHANNEL = sys.argv[1]
MESSAGE_ID = int(sys.argv[2])
NAME_OF_ELFBAR = sys.argv[3]
LIST_OF_ELFBARS = to_string(sys.argv[4])
PRICE = int(sys.argv[5])

MESSAGE = convert_to_emoji(NAME_OF_ELFBAR) + '\n—————————————————\n' + LIST_OF_ELFBARS + '\n' + convert_to_emoji(str(PRICE) + " EUR\n\n---------")
MESSAGE = add_links(links, MESSAGE)

with TelegramClient(StringSession(SESSION), API_ID, API_HASH) as client:
    client.parse_mode = CustomMarkdown()
    try:
        client.edit_message(TELEGRAM_CHANNEL, MESSAGE_ID, MESSAGE, link_preview=False)
    except(telethon.errors.rpcerrorlist.MessageNotModifiedError):
        pass