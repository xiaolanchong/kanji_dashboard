# Script to generate joyo_quick.html page with joyo kanji table.
# Contents: kanji, on readings, kun readings, main meaning

import os
import jinja2
import collections
import re

Record = collections.namedtuple('Record', 'kanji kun on meaning_yarxi meaning_english')


def is_katakana(sym):
    return 0x30a0 <= ord(sym) <= 0x30ff


def is_hiragana(sym):
    return 0x3041 <= ord(sym) <= 0x3096


def generate_joyo_html(env):
    data = read_records()
    template = env.get_template('joyo_quick.template.html')
    html = template.render(records=data)
    with open(os.path.join('..', 'joyo_quick.html'), mode='w', encoding='utf8') as file:
        file.write(html)


def generate_jun1_html(env):
    data = read_jun1()
    template = env.get_template('jun1_quick.template.html')
    html = template.render(records=data)
    with open(os.path.join('..', 'jun1_quick.html'), mode='w', encoding='utf8') as file:
        file.write(html)


def read_records():
    records = []
    with open(os.path.join('..', 'data', 'joyo_quick.txt'), encoding='utf8') as f:
        for line in f.readlines():
            parts = line.split('\t')
            if len(parts) != 4:
                print(f'{line}: incorrect format')
                continue
            english, kanji, readings, yarxi = parts
            readings = re.split('[,、 ]', readings)
            on = []
            kun = []
            for reading in readings:
                if len(reading) == 0:
                    continue
                is_on = next((x for x in reading if not is_katakana(x) and x not in ['（', '）', '-']), None) is None
                is_kun = next((x for x in reading if not is_hiragana(x) and x not in ['（', '）', '-']), None) is None
                if is_on:
                    on.append(reading)
                elif is_kun:
                    kun.append(reading)
                else:
                    print(f'{kanji}: unknown reading: {reading}')
            records.append(Record(kanji, '、'.join(on), '、'.join(kun), yarxi, english))
    return records


def read_jun1():
    records = []
    with open(os.path.join('..', 'data', 'jun1_quick.txt'), encoding='utf8') as f:
        for line in f.readlines():
            line = line.strip()
            parts = line.split('\t')
            if len(parts) != 7:
                print(f'{line}, parts={len(parts)}: incorrect format')
                continue
            kanji, true_on, yarxi, on_yomi, nanori, radical_readings, english = parts
            on = []
            kun = []
            for reading in on_yomi.split():
                if len(reading) == 0:
                    continue
                is_on = next((x for x in reading if not is_katakana(x) and x not in ['"']), None) is None
                is_kun = next((x for x in reading if not is_hiragana(x) and x not in ['.', '-']), None) is None
                if is_on:
                    on.append(reading)
                elif is_kun:
                    kun.append(reading)
                else:
                    print(f'{kanji}: unknown reading: {reading}')
            all_nanori = [f'[{one_nanori}]' for one_nanori in nanori.split()]
            all_radicals = [f'<{one_radical}>' for one_radical in radical_readings.split()]
            kun = kun + all_nanori + all_radicals
            records.append(Record(kanji, true_on, '、'.join(kun), yarxi, english))
    return records


glob_env = jinja2.Environment(
    loader=jinja2.PackageLoader('joyo_quick', package_path=os.path.join('..', 'template')),
    autoescape=jinja2.select_autoescape(['html', 'xml'])
)

#generate_joyo_html(glob_env)
#recs = read_jun1()
generate_jun1_html(glob_env)
#print(recs)
