const fs = require('fs');

// 1. Update app/portfolio/page.tsx
let pagePath = 'd:\\appadvent-main\\app\\portfolio\\page.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

if (!content.includes("import { motion } from 'framer-motion'")) {
    content = content.replace(/(import React.*?;\r?\n)/, "$1import { motion } from 'framer-motion';\n");
}

if (!content.includes("@keyframes shimmer")) {
    const styleBlock = `
                    <style>{\`
                      @keyframes shimmer {
                        0% { transform: translateX(-100%); }
                        100% { transform: translateX(100%); }
                      }
                    \`}</style>`;
    content = content.replace(/(<section className="relative overflow-hidden font-THICCCBOI">)/, `$1${styleBlock}`);
}

// Animate the text side
if (!content.includes('<motion.div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start"')) {
    content = content.replace(
        /<div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">([\s\S]*?)<\/div>\s*<div className="relative flex justify-center order-1 lg:order-2 w-full">/,
        `<motion.div 
                            className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={{
                                hidden: { opacity: 0, y: -30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                            }}
                        >
                            $1
                        </motion.div>

                        <div className="relative flex justify-center order-1 lg:order-2 w-full">`
    );
}

// Animate the grid
if (!content.includes('<motion.div className="grid grid-cols-1 md:grid-cols-2 gap-\\[32px\\]')) {
    content = content.replace(
        /<div className="grid grid-cols-1 md:grid-cols-2 gap-\[32px\] sm:gap-\[32px\] lg:gap-\[32px\]">([\s\S]*?)<\/div>/,
        `<motion.div 
                            className="grid grid-cols-1 md:grid-cols-2 gap-[32px] sm:gap-[32px] lg:gap-[32px]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.12,
                                    },
                                },
                            }}
                        >
                            {currentCards.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 50, scale: 0.95 },
                                        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
                                    }}
                                >
                                    <PortfolioCard
                                        image={item.image}
                                        title={item.title}
                                        duration={item.duration}
                                        platform={item.platform}
                                        slug={item.slug}
                                        {...(item.href ? { href: item.href } : {})}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>`
    );
}
fs.writeFileSync(pagePath, content, 'utf8');

// 2. Update subpages
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

    if (!subContent.includes("import { motion } from 'framer-motion'")) {
        subContent = subContent.replace(/(import React.*?;\r?\n)/, "$1import { motion } from 'framer-motion';\n");
    }

    // Wrap Hero content in motion.div
    if (!subContent.includes('<motion.div className="relative z-20 text-center w-full max-w-7xl')) {
        subContent = subContent.replace(
            /(<div className="relative z-20 text-center w-full max-w-7xl mx-auto flex flex-col items-center gap-4 px-4(?: md:-mt-10)?">)([\s\S]*?)(<\/section>)/,
            (match, p1, p2, p3) => {
                // Change the opening div to motion.div with animation props
                const animatedP1 = p1.replace('<div', '<motion.div').replace('className="', 'initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } } }} className="');
                
                // Replace closing div before </section> with </motion.div>
                const lastDivIndex = p2.lastIndexOf('</div>');
                if (lastDivIndex !== -1) {
                    p2 = p2.substring(0, lastDivIndex) + '</motion.div>' + p2.substring(lastDivIndex + 6);
                }
                return animatedP1 + p2 + p3;
            }
        );
    }

    // Wrap About Content in motion.div
    if (subContent.includes('className="relative z-10"')) {
         if (!subContent.includes('<motion.div className="relative z-10" initial="hidden"')) {
             subContent = subContent.replace(
                 /(<div className="relative z-10">)([\s\S]*?<h2[\s\S]*?<\/h2>)/,
                 `<motion.div className="relative z-10" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } } }}>$2`
             );
             // Since it's hard to find the matching closing tag for this relative z-10 div robustly with regex,
             // I'll just change the opening tag to motion.div, and then replace the very next </div>... no, wait.
             // It's safer to just replace `<div className="relative z-10">` and its matching `</div>`.
             // Actually, I can just animate the H2 directly inside it.
             // Reverting that and doing safer replacement:
         }
    }

    // Safer H2 animation in About section
    if (!subContent.includes('<motion.h2 className="text-2xl')) {
        subContent = subContent.replace(
            /(<h2 className="text-3xl md:text-5xl font-bold.*?>)([\s\S]*?)(<\/h2>)/,
            (match, p1, p2, p3) => {
                return p1.replace('<h2', '<motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } } }}') + p2 + p3;
            }
        );
        subContent = subContent.replace(
            /(<h2 className="text-2xl sm:text-3xl md:text-\[40px\] font-bold.*?>)([\s\S]*?)(<\/h2>)/,
            (match, p1, p2, p3) => {
                return p1.replace('<h2', '<motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } } }}') + p2 + p3;
            }
        );
    }
    
    // Animate Results grid if it exists
    if (subContent.includes('className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4')) {
        if (!subContent.includes('<motion.div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4')) {
            subContent = subContent.replace(
                /<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">/,
                `<motion.div 
                            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.12,
                                    },
                                },
                            }}
                        >`
            );
            
            subContent = subContent.replace(
                /<div key=\{label\} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left group">/g,
                `<motion.div key={label} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left group" variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } } }}>`
            );
            
            // Fix closing tag for the grid
            // We replaced <div className="grid..."> with <motion.div...>.
            // Let's replace the closing </div> of the map function and the grid.
            const resultsSectionRegex = /(<motion\.div \s*className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10"[\s\S]*?)(<\/div>\s*<\/div>\s*<\/section>)/;
            subContent = subContent.replace(resultsSectionRegex, (match, p1, p2) => {
                return p1.replace(/<\/div>\s*$/, '</motion.div>') + p2;
            });
            // The mapping structure is:
            // {[...] .map(...) => (
            //   <motion.div key={label} ...> ... </motion.div>
            // )}
            // </div>
            subContent = subContent.replace(/<\/div>\s*\}\)\}\s*<\/div>/, '</motion.div>\n                                ))} \n                            </motion.div>');
        }
    }

    fs.writeFileSync(subpage, subContent, 'utf8');
}
console.log("Done updating portfolio pages.");
