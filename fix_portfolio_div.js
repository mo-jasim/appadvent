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

    // Revert the opening <motion.div className="relative z-10"...> back to <div className="relative z-10">
    const badOpeningRegex = /<motion\.div className="relative z-10" initial="hidden" whileInView="visible" viewport=\{\{ once: true, margin: "-60px" \}\} variants=\{\{ hidden: \{ opacity: 0, y: 30 \}, visible: \{ opacity: 1, y: 0, transition: \{ duration: 0\.6, ease: \[0\.25, 0\.46, 0\.45, 0\.94\] \} \} \}\}>/g;
    
    subContent = subContent.replace(badOpeningRegex, '<div className="relative z-10">');

    fs.writeFileSync(subpage, subContent, 'utf8');
}

console.log("Reverted mismatched <motion.div> back to <div> in portfolio pages.");
