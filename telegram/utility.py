from telethon.extensions import markdown
from telethon import types
from credentials import *
from telethon.sync import TelegramClient
from resources.letters import letters_map

class CustomMarkdown:
    @staticmethod
    def parse(text):
        text, entities = markdown.parse(text)
        for i, e in enumerate(entities):
            if isinstance(e, types.MessageEntityTextUrl):
                if e.url == 'spoiler':
                    entities[i] = types.MessageEntitySpoiler(e.offset, e.length)
                elif e.url.startswith('emoji/'):
                    entities[i] = types.MessageEntityCustomEmoji(e.offset, e.length, int(e.url.split('/')[1]))
        return text, entities
    @staticmethod
    def unparse(text, entities):
        for i, e in enumerate(entities or []):
            if isinstance(e, types.MessageEntityCustomEmoji):
                entities[i] = types.MessageEntityTextUrl(e.offset, e.length, f'emoji/{e.document_id}')
            if isinstance(e, types.MessageEntitySpoiler):
                entities[i] = types.MessageEntityTextUrl(e.offset, e.length, 'spoiler')
        return markdown.unparse(text, entities)
    

def find_message_by_id(messages, id):
    message = list(filter(lambda m: m.id == id, messages))
    return message[0]


def convert_to_emoji(string):
    message = ''
    for symbol in string:
        if symbol.upper() in letters_map:
            message += '[❤️](emoji/' + str(letters_map[str.upper(symbol)]) + ')'
        else:
            message += symbol
    return message