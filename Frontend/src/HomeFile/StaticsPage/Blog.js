import React, { useState } from "react";
import Header from "../../CoreFile/Header";
import Footer from "../../CoreFile/Footer";
import { Team } from "./Team";

const allPosts = [
  {
    id: 1,
    image: "https://img.freepik.com/premium-photo/man-hands-using-laptop-streaming-online-watching-video-internet-show-tutorial_27634-410.jpg?uid=R90634854&ga=GA1.1.1673403856.1719407260&semt=ais_hybrid&w=740",
    title: "Modern UI Design Principles for 2025",
    author: "George Lee",
    date: "27 June, 2025",
    views: 205,
    comments: 12,
    category: "Design",
    featured: true,
  },
  {
    id: 2,
    image: "https://img.freepik.com/premium-photo/online-live-video-marketing-concept_12892-37.jpg?uid=R90634854&ga=GA1.1.1673403856.1719407260&semt=ais_hybrid&w=740",
    title: "Advanced CSS Techniques for Responsive Layouts",
    author: "Sarah Smith",
    date: "28 June, 2025",
    views: 318,
    comments: 24,
    category: "Development",
    featured: true,
  },
  {
    id: 3,
    image: "https://img.freepik.com/premium-photo/human-hands-use-laptops-morning-watch-online-streaming-watch-video-internet-watch-live-concerts-shows-online-lessons-there-is-sunshine-morning_1226545-1927.jpg?uid=R90634854&ga=GA1.1.1673403856.1719407260&semt=ais_hybrid&w=740",
    title: "Complete Guide to Web Performance Optimization",
    author: "Mike Johnson",
    date: "29 June, 2025",
    views: 452,
    comments: 35,
    category: "Performance",
    featured: true,
  },
  {
    id: 4,
    image: "https://source.unsplash.com/random/800x600?ai",
    title: "Emerging Trends in Artificial Intelligence",
    author: "Emma Wilson",
    date: "30 June, 2025",
    views: 567,
    comments: 42,
    category: "Technology",
    featured: false,
  },
  {
    id: 5,
    image: "https://source.unsplash.com/random/800x600?ai",
    title: "Emerging Trends in Artificial Intelligence",
    author: "Emma Wilson",
    date: "30 June, 2025",
    views: 567,
    comments: 42,
    category: "Technology",
    featured: false,
  },
  {
    id: 6,
    image: "https://source.unsplash.com/random/800x600?ai",
    title: "Emerging Trends in Artificial Intelligence",
    author: "Emma Wilson",
    date: "30 June, 2025",
    views: 567,
    comments: 42,
    category: "Technology",
    featured: false,
  },
  {
    id: 7,
    image: "https://source.unsplash.com/random/800x600?ai",
    title: "Emerging Trends in Artificial Intelligence",
    author: "Emma Wilson",
    date: "30 June, 2025",
    views: 567,
    comments: 42,
    category: "Technology",
    featured: false,
  },
];

export const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const postsPerPage = 6;

  // Filter and paginate posts
  const filteredPosts = allPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header />
      <div className="h-[80px]"></div>
      <section className="py-12 md:py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center mb-12">
            <p className="text-orange-600 font-bold uppercase mb-4 tracking-wider text-sm">
              Latest Insights
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore Our <span className="text-orange-600">Blog</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover cutting-edge trends and expert perspectives in tech and design
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center bg-white rounded-full shadow-md px-6 py-3 flex-wrap">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="flex-grow outline-none text-gray-800 placeholder-gray-500 bg-transparent"
              />
              <button className="ml-4 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full transition-colors duration-300">
                Search
              </button>
            </div>
          </div>

          {/* Featured Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {currentPosts
              .filter(post => post.featured)
              .map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 md:h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 right-4 bg-orange-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
                      <span className="mr-2">By {post.author}</span>
                      <span className="mr-2">•</span>
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          👀 {post.views}
                        </span>
                        <span className="flex items-center">
                          💬 {post.comments}
                        </span>
                      </div>
                      <button className="text-orange-600 hover:text-orange-700 font-medium">
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
          </div>

          {/* All Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {currentPosts
              .filter(post => !post.featured)
              .map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 md:h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 right-4 bg-orange-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
                      <span className="mr-2">By {post.author}</span>
                      <span className="mr-2">•</span>
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          👀 {post.views}
                        </span>
                        <span className="flex items-center">
                          💬 {post.comments}
                        </span>
                      </div>
                      <button className="text-orange-600 hover:text-orange-700 font-medium">
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex gap-2">
              {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }).map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`w-10 h-10 rounded-lg transition-all duration-200 font-medium
                    ${
                      currentPage === index + 1
                        ? 'bg-orange-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-orange-100'
                    }`}
                >
                  {index + 1}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </section>
      <Team />
      <Footer />
    </>
  );
};