import os

pb_file = r"C:\Users\Admin\.gemini\antigravity\conversations\830701a0-98e2-4cb2-873e-5a36866bb433.pb"

with open(pb_file, 'rb') as f:
    data = f.read()

# Extract printable ASCII
chars = []
for b in data:
    if 32 <= b <= 126 or b == 10:
        chars.append(chr(b))
    else:
        chars.append('\n')

text = "".join(chars)
# split into lines, merge subsequent lines if they look like code
lines = text.split('\n')

with open('pb_strings.txt', 'w', encoding='utf-8') as f:
    for line in lines:
        if len(line.strip()) > 10:
            f.write(line + '\n')

print("Wrote pb_strings.txt")
