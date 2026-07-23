const fs = require('fs');

const subpages = [
    "d:\\appadvent-main\\app\\portfolio\\Detect-microplastic\\page.tsx",
    "d:\\appadvent-main\\app\\portfolio\\Freshup\\page.tsx",
    "d:\\appadvent-main\\app\\portfolio\\Goalkick\\page.tsx",
    "d:\\appadvent-main\\app\\portfolio\\Letramway\\page.tsx",
    "d:\\appadvent-main\\app\\portfolio\\Newness\\page.tsx",
    "d:\\appadvent-main\\app\\portfolio\\Privicam\\page.tsx",
    "d:\\appadvent-main\\app\\portfolio\\Queue-Management-System\\page.tsx"
];

for (const subpage of subpages) {
    if (!fs.existsSync(subpage)) continue;
    let subContent = fs.readFileSync(subpage, 'utf8');

    // Fix the mismatched <motion.h2> and </h2> tags
    // The regex matches <motion.h2 ...> ... </h2> and replaces </h2> with </motion.h2>
    subContent = subContent.replace(/(<motion\.h2[^>]*>[\s\S]*?)<\/h2>/g, "$1</motion.h2>");

    fs.writeFileSync(subpage, subContent, 'utf8');
}

console.log("Fixed mismatched motion tags in portfolio pages.");
