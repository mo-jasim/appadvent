import re

pb_file = r"C:\Users\Admin\.gemini\antigravity\conversations\830701a0-98e2-4cb2-873e-5a36866bb433.pb"

with open(pb_file, 'rb') as f:
    content = f.read().decode('utf-8', errors='ignore')

# Let's just find the first occurrence of "The following code has been modified"
idx = content.find("The following code has been modified")
if idx != -1:
    print("Found! Here is a snippet:")
    print(repr(content[idx-100:idx+500]))
else:
    print("Not found at all!")
