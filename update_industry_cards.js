const fs = require('fs');

const files = [
    "d:\\appadvent-main\\app\\industries\\Social-&-Community\\page.tsx",
    "d:\\appadvent-main\\app\\industries\\Media-&-Entertainment\\page.tsx",
    "d:\\appadvent-main\\app\\industries\\Health-&-pharmacy\\page.tsx",
    "d:\\appadvent-main\\app\\industries\\Fintech-Crypto\\page.tsx",
    "d:\\appadvent-main\\app\\industries\\Finance-&-Banking\\page.tsx",
    "d:\\appadvent-main\\app\\industries\\Ecommerce\\page.tsx",
    "d:\\appadvent-main\\app\\industries\\Consumer-internet\\page.tsx"
];

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');

    // 1. Ensure style block is present for animations
    if (!content.includes("@keyframes shimmer")) {
        const styleBlock = `
                    <style>{\`
                      @keyframes shimmer {
                        0% { transform: translateX(-100%); }
                        100% { transform: translateX(100%); }
                      }
                      @keyframes iconFloat {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-6px); }
                      }
                    \`}</style>`;
        
        // Find the section that contains the framework steps
        const targetSectionRegex = /(<section[^>]*?Our.*?Framework[\s\S]*?>)(\s*<!-- Title -->\s*<h2)/i;
        content = content.replace(targetSectionRegex, `$1${styleBlock}$2`);
    }

    // 2. Animate the section headings if not already animated
    // The previous script looked for a specific className which might vary.
    // Let's just find the h2 before the motion.div grid
    const headingRegex = /(<!-- Title -->\s*)(<h2[^>]*?>[\s\S]*?<\/h2>)(?=\s*<motion\.div\s*className="grid grid-cols-1 md:grid-cols-3)/;
    const match = content.match(headingRegex);
    
    if (match) {
        // If it's not already wrapped in motion.div, wrap it.
        const fullMatch = match[0];
        const h2Content = match[2];
        if (!fullMatch.includes("variants={{")) {
            const animatedHeading = `
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={{
                            hidden: { opacity: 0, y: -30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                        }}
                    >
                        ${h2Content}
                    </motion.div>`;
            content = content.replace(fullMatch, match[1] + animatedHeading);
        }
    }

    fs.writeFileSync(file, content, 'utf8');
}
console.log("Done adding styles and heading animations to 7 industry pages.");
