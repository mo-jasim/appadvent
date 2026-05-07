"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import FloatingContactButtons from "@/components/FloatingContactButtons";

const blogPosts = [
  {
    id: 1,
    category: "DIGITAL MARKETING",
    categoryColor: "#E91E8C",
    title: "How Future Healthcare Technology is Improving At-Home Care",
    description:
      "How Future Healthcare Technology is Improving At-Home Care Medical solutions.",
    image: "/images/img1.png",
    slug: "#",
  },
  {
    id: 2,
    category: "SOFTWARE",
    categoryColor: "#32B9E9",
    title: "How to Plan Web Application Development Services for Scalable Business Growth",
    description:
      "How to Plan Web Application Development Services for Scalable Business Growth.",
    image: "/images/img2.png",
    slug: "#",
  },
  {
    id: 3,
    category: "DEVELOPMENT",
    categoryColor: "#32B9E9",
    title: "How to Choose a Reputable AI Development Services Provider?",
    description:
      "How to Choose a Reputable AI Development Services Provider? AI Virtual.",
    image: "/images/img3.png",
    slug: "#",
  },
  {
    id: 4,
    category: "SOFTWARE",
    categoryColor: "#32B9E9",
    title: "EMR Vs EHR Development: What should you choose for your healthcare business?",
    description:
      "EMR vs EHR Development: What should you choose for your healthcare business?",
    image: "/images/img7.png",
    slug: "#",
  },
  {
    id: 5,
    category: "SOFTWARE",
    categoryColor: "#32B9E9",
    title: "Google Word Coach",
    description:
      "Google Word Coach: Google Word Coach is one of the most popular.",
    image: "/images/img8.png",
    slug: "#",
  },
  {
    id: 6,
    category: "SOFTWARE",
    categoryColor: "#32B9E9",
    title: "App Development Company Case Study: Importance of Software Development Performance Metrics",
    description:
      "App Development Company Case Study: Importance of Software Development Performance Metrics.",
    image: "/images/img9.png",
    slug: "#",
  },
  {
    id: 7,
    category: "DEVELOPMENT",
    categoryColor: "#32B9E9",
    title: "Top Mobile App Development Trends to Watch in 2025",
    description:
      "Explore the latest trends shaping mobile app development and how businesses can leverage them.",
    image: "/images/img10.png",
    slug: "#",
  },
  {
    id: 8,
    category: "SOFTWARE",
    categoryColor: "#32B9E9",
    title: "Why Performance Metrics Matter in Software Development",
    description:
      "Why Performance Metrics Matter in Software Development and how to use them effectively.",
    image: "/images/img11.png",
    slug: "#",
  },
  {
    id: 9,
    category: "DIGITAL MARKETING",
    categoryColor: "#E91E8C",
    title: "How to Build an Effective Digital Marketing Strategy for Startups",
    description:
      "A step-by-step guide to building a powerful digital marketing strategy for startups.",
    image: "/images/img12.png",
    slug: "#",
  },
];

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return blogPosts;
    return blogPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <main className="min-h-screen bg-[#FBFBFF] font-SpaceGrotesk">
        <section className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          {/* Search Bar */}
          <div className="mb-12 flex items-center w-full rounded-full border-1 border-gray-200 bg-[#F5F5F5]  overflow-hidden h-[60px] md:h-[50px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search Appadvent..."
              className="flex-1 bg-transparent px-8 py-2 text-[15px] md:text-[16px] text-gray-700 placeholder-gray-500 outline-none font-medium"
            />
            <button
              className="h-full px-3 md:px-4 bg-[#32B9E9] hover:bg-[#1fa8d6] transition-colors duration-300 flex items-center justify-center flex-shrink-0"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                />
              </svg>
            </button>
          </div>
          {/* Heading */}
          <div className="mb-8 md:mb-10">
            <h1 className="text-[18px] md:text-[22px] font-semibold sans-serif text-[#0A1A2E] leading-snug mb-6">
              What we&apos;ve learned is{" "}
              <span className="text-[#32B9E9]">yours for sharing!</span>
            </h1>
            {/* Underline accent */}
            <div className="mt-2 w-20 h-[4px] bg-[#32B9E9] rounded-full" />
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col group/card"
              >
                {/* Thumbnail with category badge */}
                <div className="relative w-full h-[200px] flex-shrink-0 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Category Badge */}
                  <div
                    className="absolute top-4 right-4 text-white text-[11px] font-bold px-3 py-1.5 rounded-[4px] uppercase tracking-wider shadow-md z-10"
                    style={{ backgroundColor: post.categoryColor }}
                  >
                    {post.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-grow p-6">
                  {/* Title */}
                  <h2 className="text-[18px] font-semibold text-[#0A1A2E] leading-tight mb-3 line-clamp-2">
                    <Link
                      href={post.slug}
                      className="hover:text-[#32B9E9] transition-colors duration-200"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {/* Description */}
                  <p className="text-[14px] text-[#6B7280] leading-relaxed mb-6 line-clamp-2 flex-grow font-medium">
                    {post.description}
                  </p>

                  {/* Read More */}
                  <Link
                    href={`/blog/Healthcare${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-[#32B9E9] text-[13px] font-bold uppercase tracking-widest transition-colors duration-200 group/link mt-auto"
                  >
                    READ MORE
                    <span className="text-[#32B9E9] text-[18px] leading-none mb-0.5 group-hover/link:translate-x-2 transition-transform duration-300 inline-block">
                      »
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={` cursor-pointer w-8 h-8 rounded text-sm font-semibold transition-all duration-200 ${currentPage === page
                  ? "bg-[#0A1A2E] text-white"
                  : "bg-gray-100 text-[#0A1A2E] hover:bg-gray-200"
                  }`}
              >
                {page}
              </button>
            ))}
          </div>
        </section>
      </main>
      <FloatingContactButtons />
    </>
  );
}
