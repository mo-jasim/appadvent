import os
import json
import urllib.parse
import shutil
from datetime import datetime, timedelta

# Files modified after this timestamp will be considered for restoration
cutoff_time = datetime.now() - timedelta(hours=10)
cutoff_timestamp_ms = int(cutoff_time.timestamp() * 1000)

project_dir = r"c:\Users\Admin\Desktop\New folder (2)\project"
history_dir = os.path.expanduser(r'~\AppData\Roaming\Code\User\History')

# Find all files in project modified in the last 10 hours
recently_modified = []
for root, dirs, files in os.walk(project_dir):
    if 'node_modules' in root or '.next' in root or '.git' in root:
        continue
    for f in files:
        full_path = os.path.join(root, f)
        try:
            mtime = os.path.getmtime(full_path)
            if mtime > cutoff_time.timestamp():
                recently_modified.append(full_path)
        except:
            pass

print(f"Found {len(recently_modified)} files modified in the project recently.")

# Build lookup from history entries
history_lookup = {}
for root, dirs, files in os.walk(history_dir):
    if 'entries.json' in files:
        entries_path = os.path.join(root, 'entries.json')
        try:
            with open(entries_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            resource = data.get('resource', '')
            if resource.startswith('file:///'):
                # Unquote URL encoding
                parsed_path = urllib.parse.unquote(resource[8:])
                # Replace forward slashes with backslashes for Windows path comparison
                parsed_path_win = parsed_path.replace('/', '\\')
                
                # Check if it's in our project
                if parsed_path_win.lower().startswith(project_dir.lower()):
                    entries = data.get('entries', [])
                    entries.sort(key=lambda x: x.get('timestamp', 0))
                    
                    # find the latest entry BEFORE cutoff
                    best_entry = None
                    for entry in entries:
                        if entry.get('timestamp', 0) < cutoff_timestamp_ms:
                            best_entry = entry
                        else:
                            break
                    
                    if best_entry:
                        source_file = os.path.join(root, best_entry['id'])
                        history_lookup[parsed_path_win.lower()] = source_file
        except Exception as e:
            pass

restoration_plan = []
unrecoverable = []

for file_path in recently_modified:
    # Some normalize
    lookup_key = file_path.lower()
    if lookup_key in history_lookup:
        restoration_plan.append((file_path, history_lookup[lookup_key]))
    else:
        unrecoverable.append(file_path)

print(f"Can recover {len(restoration_plan)} files.")
if unrecoverable:
    print(f"Cannot recover {len(unrecoverable)} files (not found in VS Code history).")

# Output the plan to a JSON so we can review
with open('plan.json', 'w', encoding='utf-8') as f:
    json.dump({'recoverable': restoration_plan, 'unrecoverable': unrecoverable}, f, indent=2)

print("plan.json has been written.")
