const fs = require('fs');

// 1. Update app/blog/page.tsx
let blogPagePath = 'd:\\appadvent-main\\app\\blog\\page.tsx';
let blogContent = fs.readFileSync(blogPagePath, 'utf8');

if (!blogContent.includes("import { motion } from 'framer-motion'")) {
    blogContent = blogContent.replace(/(import React.*?;\r?\n)/, "$1import { motion } from 'framer-motion';\n");
}

if (!blogContent.includes("@keyframes shimmer")) {
    // Add shimmer keyframes right after `<main ...>`
    blogContent = blogContent.replace(
        /(<main className="min-h-screen bg-\[#FBFBFF\] font-THICCCBOI">)/,
        `$1
        <style>{\`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        \`}</style>`
    );
}

// Animate Heading Section
if (!blogContent.includes('<motion.div className="mb-8 md:mb-10"')) {
    blogContent = blogContent.replace(
        /<div className="mb-8 md:mb-10">/,
        `<motion.div 
            className="mb-8 md:mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
                hidden: { opacity: 0, y: -30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
            }}
        >`
    );
    // Replace the closing div of the heading section
    // It's `<div className="mb-8 md:mb-10"> ... </div>` before the Blog Grid
    blogContent = blogContent.replace(
        /<\/h1>\s*\{\/\* Underline accent \*\/\}\s*<div className="mt-2 w-20 h-\[4px\] bg-\[#32B9E9\] rounded-full" \/>\s*<\/div>/,
        `</h1>
            {/* Underline accent */}
            <div className="mt-2 w-20 h-[4px] bg-[#32B9E9] rounded-full" />
          </motion.div>`
    );
}

// Animate Blog Grid container
if (!blogContent.includes('<motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"')) {
    blogContent = blogContent.replace(
        /<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">/,
        `<motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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

    // Turn <article> into <motion.article>
    blogContent = blogContent.replace(
        /<article\s+key=\{post\.id\}\s+className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1\.5 transition-all duration-500 flex flex-col group\/card"\s*>/g,
        `<motion.article
                key={post.id}
                className="relative bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col group/card"
                variants={{
                    hidden: { opacity: 0, y: 50, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
                }}
              >
                {/* Gradient Border Line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover/card:w-3/4 bg-gradient-to-r from-transparent via-[#32B9E9] to-transparent transition-all duration-700 rounded-full z-20" />
                {/* Shimmer Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-[20px] pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-10">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#32B9E9]/5 to-transparent"
                    style={{ animation: "shimmer 2s ease-in-out infinite" }}
                  />
                </div>`
    );

    // Close <motion.article>
    // The closing tag is `</article>` right before `{/* Pagination */}`
    blogContent = blogContent.replace(/<\/article>\s*\)\)\}\s*<\/div>/g, "</motion.article>\n            ))}\n          </motion.div>");
}
fs.writeFileSync(blogPagePath, blogContent, 'utf8');


// 2. Update app/about-us/page.tsx
let aboutPagePath = 'd:\\appadvent-main\\app\\about-us\\page.tsx';
let aboutContent = fs.readFileSync(aboutPagePath, 'utf8');

if (!aboutContent.includes("import { motion } from 'framer-motion'")) {
    aboutContent = aboutContent.replace(/(import \{ useState, useEffect \} from 'react';)/, "$1\nimport { motion } from 'framer-motion';");
}

// Animate Hero text
if (!aboutContent.includes('<motion.div className="flex flex-col items-center"')) {
    aboutContent = aboutContent.replace(
        /(<div className="flex flex-col items-center">)([\s\S]*?)(<div className="flex items-center justify-center mt-6">)([\s\S]*?)(<\/button>\s*<\/div>\s*<\/div>\s*<\/div>)/,
        (match, p1, p2, p3, p4, p5) => {
            return `<motion.div 
          className="flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
          }}
        >` + p2 + p3 + p4 + p5.replace(/<\/div>\s*$/, '</motion.div>');
        }
    );
}

// Animate Stats grid
if (!aboutContent.includes('<motion.div \n      className="\n      grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4')) {
    aboutContent = aboutContent.replace(
        /<div className="\s*grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4\s*gap-4 sm:gap-6\s*max-w-7xl mx-auto mt-12 md:mt-16 mb-\[120px\]\s*">/,
        `<motion.div 
      className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mt-12 md:mt-16 mb-[120px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
          hidden: {},
          visible: {
              transition: { staggerChildren: 0.12 }
          }
      }}
    >`
    );
    
    // Replace the internal div in stats map
    aboutContent = aboutContent.replace(
        /<div\s*key=\{label\}\s*className="\s*flex flex-col items-center justify-center\s*shadow-md hover:bg-white rounded-\[16px\] h-auto min-h-\[140px\] w-full max-w-\[305px\] mx-auto\s*py-4 sm:py-6 hover:text-\[#32B9E9\]\s*"\s*>/g,
        `<motion.div
              key={label}
              className="flex flex-col items-center justify-center shadow-md hover:bg-white rounded-[16px] h-auto min-h-[140px] w-full max-w-[305px] mx-auto py-4 sm:py-6 hover:text-[#32B9E9] transition-transform duration-300 hover:-translate-y-1"
              variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
              }}
            >`
    );

    // Change closing tag for the stats map
    aboutContent = aboutContent.replace(/<\/div>\s*\)\)\}\s*<\/div>/g, "</motion.div>\n          ))}\n        </motion.div>");
}

// Animate Heading before carts
if (!aboutContent.includes('<motion.h1 className="text-[32px]')) {
    aboutContent = aboutContent.replace(
        /<h1 className="text-\[32px\] sm:text-\[40px\] lg:text-\[48px\] font-bold text-center px-4 mt-10 font-THICCCBOI mt-\[80px\]">/,
        `<motion.h1 
          className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-center px-4 font-THICCCBOI mt-[80px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
              hidden: { opacity: 0, y: -30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
          }}
        >`
    );
    aboutContent = aboutContent.replace(
        /Welcome the journey of Digital Transformation\.<\/h1>/,
        `Welcome the journey of Digital Transformation.</motion.h1>`
    );
}

fs.writeFileSync(aboutPagePath, aboutContent, 'utf8');
console.log("Updated blog and about-us pages successfully.");
