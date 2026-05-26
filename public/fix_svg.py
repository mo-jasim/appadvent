import re

file_path = r'c:\Users\Admin\Desktop\New folder (2)\project\public\Letimg\bigpc.svg'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove SVG drop shadow filters
content = re.sub(r'filter=\"url\([^)]+\)\"', '', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('SVG fixed!')
