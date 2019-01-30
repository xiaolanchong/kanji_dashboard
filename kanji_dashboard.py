
import collections
import operator
import jinja2

kanji = collections.defaultdict(list)

levels = ['1', '2', '3', '4', '5', '6', 'S']

Record = collections.namedtuple('Record', 'kanji strokes level')

with open('joyo.txt', mode='r', encoding='utf8') as file:
    lines = file.readlines()
    header = lines[0]
    header = '\t'.split(header)
    for line in lines[1:]:
        line = line.rstrip()
        if len(line):
            parts = line.split('\t')
            if len(parts) != 6:
                print(parts)
                continue
            id, new, old, radical, strokes, grade = parts
            rec = Record(kanji=new, strokes=int(strokes), level=grade)
            kanji[grade].append(rec)

for level in kanji.keys():
    kanji[level] = sorted(kanji[level], key=operator.attrgetter('strokes'))

#for level in levels:
    #print(len(kanji[level]))
#print(kanji['1'])

env = jinja2.Environment(
    loader=jinja2.PackageLoader('kanji_dashboard', '.'),
    autoescape=jinja2.select_autoescape(['html', 'xml'])
)
template = env.get_template('joyo.temlate.html')

html = template.render(records=kanji['1'] + kanji['2'] + kanji['3'] + kanji['4'] + kanji['5'] + kanji['6'] + kanji['S'])
with open('kanji.html', mode='w', encoding='utf8') as file:
    file.write(html)
