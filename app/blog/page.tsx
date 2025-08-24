import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

const allArticles = [
  {
    title: "The Art of Minimalist Design",
    excerpt: "Exploring how less can truly be more in modern design philosophy and its impact on user experience.",
    category: "Design",
    readTime: "5 min read",
    image: "/minimalist-workspace.png",
    slug: "the-art-of-minimalist-design",
    author: "Sarah Chen",
    publishedAt: "March 15, 2024",
  },
  {
    title: "Future of Remote Work Culture",
    excerpt: "How distributed teams are reshaping the workplace and creating new opportunities for collaboration.",
    category: "Technology",
    readTime: "8 min read",
    image: "/modern-remote-work-setup.png",
    slug: "future-of-remote-work-culture",
    author: "Marcus Rodriguez",
    publishedAt: "March 12, 2024",
  },
  {
    title: "Sustainable Living in Urban Spaces",
    excerpt: "Practical approaches to eco-friendly living in metropolitan areas without compromising on style.",
    category: "Lifestyle",
    readTime: "6 min read",
    image: "/sustainable-urban-living.png",
    slug: "sustainable-living-in-urban-spaces",
    author: "Dr. Emily Watson",
    publishedAt: "March 10, 2024",
  },
  {
    title: "The Psychology of Color in Branding",
    excerpt: "Understanding how color choices influence consumer behavior and brand perception in the digital age.",
    category: "Design",
    readTime: "7 min read",
    image: "/color-psychology-branding.png",
    slug: "the-psychology-of-color-in-branding",
    author: "Sarah Chen",
    publishedAt: "March 8, 2024",
  },
  {
    title: "AI and Creative Industries",
    excerpt: "Examining the intersection of artificial intelligence and human creativity in modern workflows.",
    category: "Technology",
    readTime: "10 min read",
    image: "/ai-creative-technology.png",
    slug: "ai-and-creative-industries",
    author: "Marcus Rodriguez",
    publishedAt: "March 5, 2024",
  },
  {
    title: "Mindful Productivity Techniques",
    excerpt: "Balancing efficiency with well-being through intentional work practices and mindful approaches.",
    category: "Lifestyle",
    readTime: "4 min read",
    image: "/mindful-productivity-workspace.png",
    slug: "mindful-productivity-techniques",
    author: "Dr. Emily Watson",
    publishedAt: "March 3, 2024",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-serif font-bold text-slate-900">All Articles</h1>
          <p className="text-lg text-slate-600 mt-2">Explore our complete collection of insights and stories</p>
        </div>
      </header>

      {/* Articles Grid */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allArticles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-700 text-sm font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-serif font-semibold text-slate-900 mb-3 line-clamp-2">{article.title}</h2>
                <p className="text-slate-600 mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <span>By {article.author}</span>
                  <span>{article.readTime}</span>
                </div>
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center text-slate-900 font-medium hover:text-blue-600 transition-colors"
                >
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
