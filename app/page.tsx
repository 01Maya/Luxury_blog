"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Page() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      content:
        "This blog has completely transformed how I approach design. The insights are invaluable and the content quality is exceptional.",
      image: "/professional-asian-woman.png",
    },
    {
      name: "Michael Chen",
      role: "Tech Entrepreneur",
      content:
        "The depth of research and thoughtful analysis in every article makes this my go-to resource for industry trends.",
      image: "/professional-hispanic-man.png",
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      content:
        "Beautifully written articles that blend practical advice with inspiring ideas. A must-read for any creative professional.",
      image: "/professional-asian-woman.png",
    },
  ]

  const blogPosts = [
    {
      title: "The Art of Minimalist Design",
      excerpt: "Exploring how less can truly be more in modern design philosophy and its impact on user experience.",
      category: "Design",
      readTime: "5 min read",
      image: "/minimalist-workspace.png",
      slug: "the-art-of-minimalist-design",
    },
    {
      title: "Future of Remote Work Culture",
      excerpt: "How distributed teams are reshaping the workplace and creating new opportunities for collaboration.",
      category: "Technology",
      readTime: "8 min read",
      image: "/modern-remote-work-setup.png",
      slug: "future-of-remote-work-culture",
    },
    {
      title: "Sustainable Living in Urban Spaces",
      excerpt: "Practical approaches to eco-friendly living in metropolitan areas without compromising on style.",
      category: "Lifestyle",
      readTime: "6 min read",
      image: "/sustainable-urban-living.png",
      slug: "sustainable-living-in-urban-spaces",
    },
    {
      title: "The Psychology of Color in Branding",
      excerpt: "Understanding how color choices influence consumer behavior and brand perception in the digital age.",
      category: "Design",
      readTime: "7 min read",
      image: "/color-psychology-branding.png",
      slug: "the-psychology-of-color-in-branding",
    },
    {
      title: "AI and Creative Industries",
      excerpt: "Examining the intersection of artificial intelligence and human creativity in modern workflows.",
      category: "Technology",
      readTime: "10 min read",
      image: "/ai-creative-technology.png",
      slug: "ai-and-creative-industries",
    },
    {
      title: "Mindful Productivity Techniques",
      excerpt: "Balancing efficiency with well-being through intentional work practices and mindful approaches.",
      category: "Lifestyle",
      readTime: "4 min read",
      image: "/mindful-productivity-workspace.png",
      slug: "mindful-productivity-techniques",
    },
  ]

  const featuredArticles = [
    {
      title: "The Renaissance of Handcrafted Design",
      author: "Sarah Chen",
      readTime: "12 min read",
      image: "/handcrafted-design-artisan.png",
      slug: "the-renaissance-of-handcrafted-design",
    },
    {
      title: "Building Resilient Digital Communities",
      author: "Marcus Rodriguez",
      readTime: "9 min read",
      image: "/digital-community-connection.png",
      slug: "building-resilient-digital-communities",
    },
    {
      title: "The Science of Habit Formation",
      author: "Dr. Emily Watson",
      readTime: "15 min read",
      image: "/habit-formation-science.png",
      slug: "the-science-of-habit-formation",
    },
  ]

  const categories = [
    { name: "Design", count: 24, color: "from-blue-500 to-blue-600", image: "/minimalist-workspace.png" },
    { name: "Technology", count: 18, color: "from-emerald-500 to-emerald-600", image: "/ai-creative-technology.png" },
    { name: "Lifestyle", count: 15, color: "from-amber-500 to-amber-600", image: "/sustainable-urban-living.png" },
    { name: "Business", count: 12, color: "from-purple-500 to-purple-600", image: "/modern-remote-work-setup.png" },
    { name: "Culture", count: 9, color: "from-rose-500 to-rose-600", image: "/handcrafted-design-artisan.png" },
    { name: "Health", count: 7, color: "from-teal-500 to-teal-600", image: "/mindful-productivity-workspace.png" },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-md bg-white/90 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="text-2xl font-serif font-bold text-slate-900 hover:text-purple-600 transition-colors duration-300"
            >
              Luxe Blog
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-slate-700 hover:text-purple-600 transition-all duration-300 hover:scale-105"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-slate-700 hover:text-purple-600 transition-all duration-300 hover:scale-105"
              >
                Articles
              </Link>
              <Link
                href="#categories"
                className="text-slate-700 hover:text-purple-600 transition-all duration-300 hover:scale-105"
              >
                Categories
              </Link>
              <Link
                href="#about"
                className="text-slate-700 hover:text-purple-600 transition-all duration-300 hover:scale-105"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-slate-700 hover:text-purple-600 transition-all duration-300 hover:scale-105"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-slate-50 text-slate-900 py-24 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-turquoise-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight animate-fade-in-up">
            Premium Content for
            <span className="block text-purple-600 animate-gradient">Modern Minds</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            Discover insights that matter. From design philosophy to technology trends, we curate content that inspires
            and informs.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in-up delay-500 group"
          >
            Explore Articles
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Latest Posts</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Fresh perspectives and insights from our community of writers and thinkers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`} className="group">
                <div
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-700 text-sm font-medium rounded-full transition-all duration-300 group-hover:bg-purple-100 group-hover:text-purple-700">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">{post.readTime}</span>
                      <span className="text-slate-900 font-medium group-hover:text-purple-600 transition-all duration-300 group-hover:translate-x-1">
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              In-depth explorations of the topics that shape our world.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="flex space-x-6 pb-4">
              {featuredArticles.map((article, index) => (
                <Link key={index} href={`/blog/${article.slug}`} className="group flex-shrink-0 w-80">
                  <div
                    className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer animate-fade-in-up hover:-translate-y-1"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-xl font-serif font-semibold text-white mb-2 group-hover:text-turquoise-200 transition-colors duration-300">
                          {article.title}
                        </h3>
                        <div className="flex items-center justify-between text-white/80 text-sm">
                          <span>By {article.author}</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="inline-flex items-center text-slate-900 font-medium group-hover:text-purple-600 transition-all duration-300 group-hover:translate-x-1">
                        Read Article →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">About Luxe Blog</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We believe in the power of thoughtful content to inspire, educate, and transform. Our curated collection
                of articles spans design, technology, lifestyle, and culture, bringing you insights from leading voices
                in their fields.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Founded on the principle that quality trumps quantity, we focus on delivering in-depth analysis and
                fresh perspectives that matter to modern professionals and creative minds.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                Read Our Story
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </Link>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-turquoise-200 rounded-2xl blur opacity-30 animate-pulse"></div>
              <Image
                src="/minimalist-workspace.png"
                alt="About Luxe Blog"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Explore Categories</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover content tailored to your interests across our diverse range of topics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/blog?category=${category.name.toLowerCase()}`}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fade-in-up ${
                  index === 0 ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : index === 1 ? "lg:col-span-2" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`relative h-48 ${index === 0 ? "lg:h-full" : ""} overflow-hidden`}>
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}
                  ></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                      {category.name}
                    </h3>
                    <p className="text-white/90 text-sm">{category.count} articles</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">What Readers Say</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Join thousands of professionals who trust us for quality insights.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-8">
                    <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="mb-6">
                        <div className="relative inline-block">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={80}
                            height={80}
                            className="rounded-full mx-auto mb-4 ring-4 ring-white shadow-lg"
                          />
                          <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-turquoise-400 rounded-full blur opacity-30 animate-pulse"></div>
                        </div>
                        <blockquote className="text-xl text-slate-700 italic mb-4 leading-relaxed">
                          "{testimonial.content}"
                        </blockquote>
                        <div>
                          <div className="font-semibold text-slate-900">{testimonial.name}</div>
                          <div className="text-slate-600">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentTestimonial ? "bg-purple-600 scale-125" : "bg-slate-300 hover:bg-purple-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50 text-slate-900 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-purple-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-turquoise-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6 text-slate-900 animate-fade-in-up">Stay Connected</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-300">
            Subscribe to our newsletter for the latest insights and exclusive content.
          </p>
          <div className="max-w-md mx-auto animate-fade-in-up delay-500">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:bg-white"
              />
              <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                Send
                <svg
                  className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2 animate-fade-in-up">
              <Link
                href="/"
                className="text-2xl font-serif font-bold mb-4 block hover:text-purple-400 transition-colors duration-300"
              >
                Luxe Blog
              </Link>
              <p className="text-slate-400 mb-4 max-w-md">
                Premium content for modern minds. Discover insights that inspire and inform.
              </p>
            </div>
            <div className="animate-fade-in-up delay-300">
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link
                    href="/"
                    className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Articles
                  </Link>
                </li>
                <li>
                  <Link
                    href="#categories"
                    className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div className="animate-fade-in-up delay-500">
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link
                    href="/blog?category=design"
                    className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog?category=technology"
                    className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog?category=lifestyle"
                    className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Lifestyle
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog?category=business"
                    className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Business
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 animate-fade-in-up delay-700">
            <p>&copy; 2024 Luxe Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
