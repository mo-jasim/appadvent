import re
import urllib.parse
import json

pb_file = r"C:\Users\Admin\.gemini\antigravity\conversations\830701a0-98e2-4cb2-873e-5a36866bb433.pb"

with open(pb_file, 'rb') as f:
    content = f.read().decode('utf-8', errors='ignore')

# Pattern to find view_file outputs.
# It usually looks like:
# File Path: `file:///c:/Users/Admin/Desktop/New%20folder%20%282%29/project/app/page.tsx`
# Total Lines: ...
# Total Bytes: ...
# Showing lines 1 to ...
# The following code has been modified to include a line number before every line...
# 1: ...
# 2: ...

pattern = re.compile(
    r"File Path: `file:///(.*?)`\s+"
    r"Total Lines: \d+\s+"
    r"Total Bytes: \d+\s+"
    r"Showing lines (\d+) to (\d+)\s+"
    r"The following code has been modified.*?\n"
    r"((?:\d+: .*?\n)+)",
    re.MULTILINE | re.DOTALL
)

matches = pattern.findall(content)

extracted_files = {}

for match in matches:
    file_path_encoded = match[0]
    file_path = urllib.parse.unquote(file_path_encoded).replace('/', '\\')
    
    # only care about project files
    if "Desktop\\New folder (2)\\project" not in file_path:
        continue
        
    start_line = int(match[1])
    end_line = int(match[2])
    lines_block = match[3]
    
    # Parse the numbered lines
    parsed_lines = []
    for line in lines_block.split('\n'):
        if not line.strip():
            continue
        # match "1: content"
        m = re.match(r"^(\d+): (.*)$", line)
        if m:
            parsed_lines.append(m.group(2))
    
    # We want to store the state of the file from the *first* time it was viewed,
    # because that was before any AI modifications!
    # Protobufs append sequentially, so the first match for a file is its original state.
    if file_path.lower() not in extracted_files:
        extracted_files[file_path.lower()] = {
            'path': file_path,
            'content': '\n'.join(parsed_lines)
        }

print(f"Extracted {len(extracted_files)} original files from logs.")

# save to a JSON so we can analyze
with open('extracted_from_logs.json', 'w', encoding='utf-8') as f:
    json.dump(extracted_files, f, indent=2)

print("Saved to extracted_from_logs.json")
