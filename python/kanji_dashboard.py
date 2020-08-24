
import collections
import operator
import jinja2
import os.path


levels = ['1', '2', '3', '4', '5', '6', 'S']

Record = collections.namedtuple('Record', 'kanji strokes level')

env = jinja2.Environment(
    loader=jinja2.PackageLoader('kanji_dashboard', package_path= os.path.join('..', 'template')),
    autoescape=jinja2.select_autoescape(['html', 'xml'])
)


def generate_joyo():
    kanji = collections.defaultdict(list)
    input_file_name = os.path.join('..', 'data', 'joyo.txt')
    with open(input_file_name, mode='r', encoding='utf8') as file:
        lines = file.readlines()
        header = lines[0]
        # header = '\t'.split(header)
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

    template = env.get_template('joyo.template.html')

    html = template.render(records=kanji['1'] + kanji['2'] + kanji['3'] + kanji['4'] + kanji['5'] + kanji['6'] + kanji['S'])
    with open(os.path.join('..', 'index.html'), mode='w', encoding='utf8') as file:
        file.write(html)


def generate_hyogai():
    generate_from_list('hyogai')


def generate_jinmeiyo():
    generate_from_list('jinmeiyo', old_form_in_parenthesis=True)


def generate_kanken_jun1():
    generate_from_list('kanken_jun1')


def generate_from_list(file_name, old_form_in_parenthesis=False):
    kanji = []
    input_file = f'{file_name}.txt'
    template_file = f'{file_name}.template.html'
    output_file = f'{file_name}.html'
    input_file_name = os.path.join('..', 'data', input_file)
    with open(input_file_name, mode='r', encoding='utf8') as file:
        line = ''.join(line.strip() for line in file.readlines())
       # old_form = False
        for index, symbol in enumerate(line):
            #old_form = False
            if old_form_in_parenthesis:
                old_form = index > 0 and line[index - 1] in {'（', '('}
            else:
                old_form = len(line) > index + 1 and line[index+1] in {'（', '('}
           #     old_form = True
            if symbol in ['（', '）', '(', ')']:
                #old_form = False
                pass
            else:
                kanji.append(Record(kanji=symbol, strokes=0, level='D' if old_form else 'S'))
    template = env.get_template(template_file)
    html = template.render(records=kanji)
    with open(os.path.join('..', output_file), mode='w', encoding='utf8') as file:
        file.write(html)


generate_joyo()
generate_hyogai()
generate_jinmeiyo()
generate_kanken_jun1()
generate_from_list('kanken_jun1full')
