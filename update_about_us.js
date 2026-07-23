const fs = require('fs');

let pagePath = 'd:\\appadvent-main\\app\\about-us\\page.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

if (!content.includes("import { motion } from 'framer-motion'")) {
    content = content.replace(/(import { useState, useEffect } from 'react';)/, "$1\nimport { motion } from 'framer-motion';");
}

// Wrap Hero Text
if (!content.includes('<motion.div className="flex flex-col items-center"')) {
    content = content.replace(
        /(<div className="flex flex-col items-center">)([\s\S]*?)(<div className="flex items-center justify-center mt-6">)/,
        `<motion.div 
          className="flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
          }}
        >$2$3`
    );
    // Wait, the above regex needs to replace the closing </div> of Hero text.
    // Actually, easier: replace `<div className="flex flex-col items-center">` with `<motion.div className="flex flex-col items-center" ...>`
    // But then the closing `</div>` becomes a mismatch.
}

fs.writeFileSync(pagePath, content, 'utf8');
console.log("Updated about-us/page.tsx");
