import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, User, Calendar, Share2, Heart, Bookmark } from "lucide-react"

const articles = {
  "the-art-of-minimalist-design": {
    title: "The Art of Minimalist Design",
    excerpt: "Exploring how less can truly be more in modern design philosophy and its impact on user experience.",
    category: "Design",
    readTime: "5 min read",
    image: "/minimalist-workspace.png",
    author: "Sarah Chen",
    publishedAt: "March 15, 2024",
    content: `
      <p>In an era of information overload and digital noise, minimalist design has emerged as a powerful antidote to complexity. This design philosophy, rooted in the principle that "less is more," has revolutionized how we approach user interfaces, brand identity, and digital experiences.</p>
      
      <h2>The Philosophy Behind Minimalism</h2>
      <p>Minimalist design isn't just about removing elements—it's about intentional curation. Every element that remains serves a purpose, creating a hierarchy that guides users naturally through the experience. This approach reduces cognitive load and allows users to focus on what truly matters.</p>
      
      <h2>Key Principles of Minimalist Design</h2>
      <p>The foundation of minimalist design rests on several core principles:</p>
      <ul>
        <li><strong>Whitespace as a Design Element:</strong> Negative space isn't empty—it's a powerful tool that creates breathing room and emphasizes important content.</li>
        <li><strong>Typography Hierarchy:</strong> Clear, readable fonts with purposeful sizing create natural reading flows without overwhelming the user.</li>
        <li><strong>Limited Color Palettes:</strong> Restraint in color choices creates cohesion and allows accent colors to have maximum impact.</li>
        <li><strong>Functional Beauty:</strong> Every design element should serve both aesthetic and functional purposes.</li>
      </ul>
      
      <h2>Impact on User Experience</h2>
      <p>Research consistently shows that minimalist interfaces lead to improved user satisfaction and task completion rates. When users aren't distracted by unnecessary elements, they can focus on their goals more effectively. This translates to better conversion rates, reduced bounce rates, and increased user engagement.</p>
      
      <h2>Implementing Minimalism in Modern Design</h2>
      <p>Successful minimalist design requires discipline and strategic thinking. Start by identifying the core message or action you want users to take, then systematically remove anything that doesn't support that goal. Remember, minimalism isn't about being sparse—it's about being intentional.</p>
      
      <p>The future of design lies in this thoughtful approach to simplicity, where every pixel serves a purpose and every interaction feels effortless.</p>
    `,
  },
  "future-of-remote-work-culture": {
    title: "Future of Remote Work Culture",
    excerpt: "How distributed teams are reshaping the workplace and creating new opportunities for collaboration.",
    category: "Technology",
    readTime: "8 min read",
    image: "/modern-remote-work-setup.png",
    author: "Marcus Rodriguez",
    publishedAt: "March 12, 2024",
    content: `
      <p>The pandemic accelerated a workplace transformation that was already underway, pushing remote work from a niche benefit to a mainstream expectation. As we look toward the future, it's clear that distributed teams aren't just a temporary solution—they're reshaping the very fabric of how we work.</p>
      
      <h2>The Evolution of Remote Work</h2>
      <p>What started as an emergency response has evolved into a sophisticated ecosystem of tools, processes, and cultural norms. Companies that initially struggled with remote coordination have developed new competencies in asynchronous communication, digital collaboration, and outcome-based performance measurement.</p>
      
      <h2>Technology as the Great Enabler</h2>
      <p>The infrastructure supporting remote work has matured dramatically. Cloud computing, collaborative platforms, and AI-powered productivity tools have created an environment where distributed teams can be more effective than their co-located counterparts. Virtual reality and augmented reality are beginning to bridge the gap between physical and digital presence.</p>
      
      <h2>Cultural Shifts and New Challenges</h2>
      <p>Remote work has democratized access to opportunities, allowing companies to tap into global talent pools while giving workers unprecedented flexibility. However, this shift has also introduced new challenges:</p>
      <ul>
        <li><strong>Maintaining Company Culture:</strong> Building shared values and connections without physical proximity requires intentional effort and new approaches.</li>
        <li><strong>Work-Life Balance:</strong> The blurred boundaries between home and office can lead to both increased flexibility and potential burnout.</li>
        <li><strong>Communication Overhead:</strong> Asynchronous communication requires more planning and documentation but can lead to more thoughtful decision-making.</li>
      </ul>
      
      <h2>The Hybrid Future</h2>
      <p>Most organizations are settling into hybrid models that combine the best of remote and in-person work. This approach allows for deep focus work at home while preserving the collaborative energy of face-to-face interactions for specific activities like brainstorming, team building, and complex problem-solving.</p>
      
      <p>As we move forward, the companies that thrive will be those that view remote work not as a constraint to work around, but as an opportunity to reimagine how work gets done.</p>
    `,
  },
  "sustainable-living-in-urban-spaces": {
    title: "Sustainable Living in Urban Spaces",
    excerpt: "Practical approaches to eco-friendly living in metropolitan areas without compromising on style.",
    category: "Lifestyle",
    readTime: "6 min read",
    image: "/sustainable-urban-living.png",
    author: "Dr. Emily Watson",
    publishedAt: "March 10, 2024",
    content: `
      <p>Urban living and sustainability might seem at odds, but cities actually offer unique opportunities for eco-friendly lifestyles. With the right approach, metropolitan dwellers can significantly reduce their environmental impact while enjoying the conveniences and culture that cities provide.</p>
      
      <h2>The Urban Advantage</h2>
      <p>Cities are inherently more sustainable than suburban sprawl. Higher population density means more efficient use of resources, better public transportation systems, and reduced per-capita energy consumption. The key is maximizing these built-in advantages while addressing urban-specific challenges.</p>
      
      <h2>Sustainable Transportation</h2>
      <p>Transportation is often the largest component of an urban dweller's carbon footprint. Cities offer multiple sustainable options:</p>
      <ul>
        <li><strong>Public Transit:</strong> Buses, trains, and subways are far more efficient than individual car ownership.</li>
        <li><strong>Active Transportation:</strong> Walking and cycling not only reduce emissions but improve personal health.</li>
        <li><strong>Car Sharing:</strong> When a car is necessary, sharing services reduce the total number of vehicles needed.</li>
        <li><strong>Electric Options:</strong> E-bikes and electric scooters provide convenient, low-emission alternatives for medium distances.</li>
      </ul>
      
      <h2>Urban Food Systems</h2>
      <p>Cities are becoming laboratories for sustainable food production and consumption. Urban farming, from rooftop gardens to vertical farms, is bringing food production closer to consumers. Community-supported agriculture (CSA) programs connect urban consumers directly with local farmers, reducing transportation emissions and supporting regional food systems.</p>
      
      <h2>Energy and Water Efficiency</h2>
      <p>Apartment living offers opportunities for efficiency that single-family homes can't match. Shared walls reduce heating and cooling needs, and building-wide systems can be more efficient than individual units. Smart building technologies are making it easier to monitor and reduce resource consumption.</p>
      
      <h2>Waste Reduction and Circular Economy</h2>
      <p>Urban density creates opportunities for sharing, reusing, and recycling that aren't available in less populated areas. Tool libraries, clothing swaps, and repair cafes are thriving in cities. The proximity of diverse businesses and services makes it easier to find sustainable alternatives to disposable goods.</p>
      
      <p>The future of sustainable living is urban. By embracing the efficiencies that cities offer and addressing their challenges with innovative solutions, we can create metropolitan areas that are both livable and environmentally responsible.</p>
    `,
  },
  "the-psychology-of-color-in-branding": {
    title: "The Psychology of Color in Branding",
    excerpt: "Understanding how color choices influence consumer behavior and brand perception in the digital age.",
    category: "Design",
    readTime: "7 min read",
    image: "/color-psychology-branding.png",
    author: "Sarah Chen",
    publishedAt: "March 8, 2024",
    content: `
      <p>Color is one of the most powerful tools in a brand's arsenal, capable of evoking emotions, conveying values, and influencing purchasing decisions within milliseconds. In our increasingly digital world, understanding color psychology has become essential for creating brands that resonate with their intended audiences.</p>
      
      <h2>The Science Behind Color Perception</h2>
      <p>Our response to color is both biological and cultural. While some color associations appear to be hardwired—red increasing heart rate and creating urgency, blue promoting calm and trust—others are learned through cultural conditioning and personal experience. Successful brands understand both universal and culture-specific color meanings.</p>
      
      <h2>Color Associations and Brand Personality</h2>
      <p>Different colors communicate different brand personalities:</p>
      <ul>
        <li><strong>Red:</strong> Energy, passion, urgency. Used effectively by brands like Coca-Cola and Netflix to create excitement and drive action.</li>
        <li><strong>Blue:</strong> Trust, reliability, professionalism. Favored by financial institutions and tech companies like IBM and Facebook.</li>
        <li><strong>Green:</strong> Growth, nature, prosperity. Perfect for environmental brands and financial services focused on growth.</li>
        <li><strong>Purple:</strong> Luxury, creativity, mystery. Often chosen by premium brands and creative services.</li>
        <li><strong>Orange:</strong> Friendliness, enthusiasm, affordability. Popular with brands targeting younger demographics.</li>
        <li><strong>Black:</strong> Sophistication, elegance, power. The go-to choice for luxury brands and high-end products.</li>
      </ul>
      
      <h2>Digital Color Considerations</h2>
      <p>The digital environment presents unique challenges and opportunities for color usage. Screen variations, accessibility requirements, and the need for colors to work across multiple platforms and devices add complexity to color selection. Brands must consider how their colors appear on everything from smartphones to billboards.</p>
      
      <h2>Cultural Context and Global Brands</h2>
      <p>Color meanings vary significantly across cultures. While white represents purity in Western cultures, it's associated with mourning in some Eastern cultures. Global brands must navigate these differences carefully, sometimes adapting their color strategies for different markets while maintaining brand consistency.</p>
      
      <h2>The Future of Color in Branding</h2>
      <p>Emerging technologies like augmented reality and dynamic displays are creating new possibilities for color usage. Brands can now adapt their colors in real-time based on context, user preferences, or environmental conditions. This evolution requires a more sophisticated understanding of color psychology and its application across diverse digital touchpoints.</p>
      
      <p>As brands compete for attention in an increasingly crowded marketplace, those that master the strategic use of color will have a significant advantage in creating memorable, emotionally resonant experiences.</p>
    `,
  },
  "ai-and-creative-industries": {
    title: "AI and Creative Industries",
    excerpt: "Examining the intersection of artificial intelligence and human creativity in modern workflows.",
    category: "Technology",
    readTime: "10 min read",
    image: "/ai-creative-technology.png",
    author: "Marcus Rodriguez",
    publishedAt: "March 5, 2024",
    content: `
      <p>Artificial intelligence is reshaping creative industries in ways that seemed impossible just a few years ago. From generating art and writing copy to composing music and editing videos, AI tools are becoming integral to creative workflows. This transformation raises important questions about the nature of creativity, the role of human artists, and the future of creative work.</p>
      
      <h2>AI as a Creative Partner</h2>
      <p>Rather than replacing human creativity, AI is emerging as a powerful collaborative partner. Designers use AI to generate initial concepts, writers employ it to overcome writer's block, and musicians leverage it to explore new sonic territories. This partnership model amplifies human creativity rather than diminishing it.</p>
      
      <h2>Transforming Creative Workflows</h2>
      <p>AI is streamlining many time-consuming aspects of creative work:</p>
      <ul>
        <li><strong>Ideation and Brainstorming:</strong> AI can generate hundreds of concepts in minutes, providing creative professionals with a rich starting point for refinement.</li>
        <li><strong>Technical Execution:</strong> Routine tasks like color correction, basic editing, and format conversion can be automated, freeing creators to focus on higher-level creative decisions.</li>
        <li><strong>Personalization at Scale:</strong> AI enables the creation of personalized content for different audiences without proportional increases in time and effort.</li>
        <li><strong>Rapid Prototyping:</strong> Quick iterations and variations allow for more experimentation and refinement in the creative process.</li>
      </ul>
      
      <h2>New Creative Possibilities</h2>
      <p>AI is not just optimizing existing processes—it's opening entirely new creative avenues. Generative art, interactive installations that respond to real-time data, and immersive experiences that adapt to individual users are becoming possible for creators who previously lacked the technical skills to implement such concepts.</p>
      
      <h2>Challenges and Ethical Considerations</h2>
      <p>The integration of AI in creative industries isn't without challenges. Questions of authorship, originality, and fair compensation arise when AI contributes significantly to creative output. There are also concerns about AI training data and the potential for bias in AI-generated content.</p>
      
      <h2>The Human Element</h2>
      <p>Despite AI's capabilities, human creativity remains irreplaceable. Emotional intelligence, cultural understanding, and the ability to connect with human experiences are uniquely human traits that AI cannot replicate. The most successful creative professionals are those who learn to leverage AI while maintaining their distinctly human perspective.</p>
      
      <h2>Preparing for the Future</h2>
      <p>Creative professionals who embrace AI as a tool while developing their uniquely human skills—empathy, storytelling, cultural insight, and emotional intelligence—will thrive in this new landscape. The future belongs to those who can seamlessly blend human creativity with AI capabilities.</p>
      
      <p>As AI continues to evolve, the creative industries will likely see even more dramatic changes. The key is to view these changes as opportunities for enhancement rather than threats to human creativity.</p>
    `,
  },
  "mindful-productivity-techniques": {
    title: "Mindful Productivity Techniques",
    excerpt: "Balancing efficiency with well-being through intentional work practices and mindful approaches.",
    category: "Lifestyle",
    readTime: "4 min read",
    image: "/mindful-productivity-workspace.png",
    author: "Dr. Emily Watson",
    publishedAt: "March 3, 2024",
    content: `
      <p>In our hyperconnected world, the pursuit of productivity often comes at the expense of well-being. Mindful productivity offers a different approach—one that prioritizes sustainable performance over unsustainable hustle, and meaningful work over mere busyness.</p>
      
      <h2>The Mindfulness Foundation</h2>
      <p>Mindful productivity begins with awareness. Before optimizing how we work, we must understand why we work and what truly matters. This involves regular check-ins with ourselves about our goals, values, and the alignment between our daily activities and our larger purpose.</p>
      
      <h2>Core Principles of Mindful Productivity</h2>
      <ul>
        <li><strong>Intentional Focus:</strong> Rather than multitasking, mindful productivity emphasizes single-tasking with full attention. This leads to higher quality work and reduced mental fatigue.</li>
        <li><strong>Energy Management:</strong> Understanding your natural energy rhythms and scheduling demanding tasks during peak energy periods while reserving low-energy times for routine activities.</li>
        <li><strong>Purposeful Breaks:</strong> Regular breaks aren't productivity killers—they're essential for maintaining focus and preventing burnout. Mindful breaks involve stepping away from work completely and engaging in restorative activities.</li>
        <li><strong>Boundary Setting:</strong> Clear boundaries between work and personal time protect both productivity and well-being. This includes digital boundaries and the discipline to disconnect.</li>
      </ul>
      
      <h2>Practical Techniques</h2>
      <p>Implementing mindful productivity doesn't require a complete lifestyle overhaul. Start with these practical techniques:</p>
      <ul>
        <li><strong>The Two-Minute Rule:</strong> If a task takes less than two minutes, do it immediately rather than adding it to your to-do list.</li>
        <li><strong>Time Blocking:</strong> Dedicate specific time blocks to different types of work, including blocks for deep work, communication, and planning.</li>
        <li><strong>Regular Reviews:</strong> Weekly and monthly reviews help ensure your activities align with your goals and values.</li>
        <li><strong>Mindful Transitions:</strong> Take a few conscious breaths when moving between tasks to reset your mental state.</li>
      </ul>
      
      <h2>The Long-Term Benefits</h2>
      <p>Mindful productivity isn't just about getting more done—it's about creating a sustainable relationship with work that supports both professional success and personal well-being. Practitioners report higher job satisfaction, reduced stress, and improved work-life integration.</p>
      
      <p>By approaching productivity mindfully, we can achieve our goals while maintaining our health, relationships, and sense of purpose. The result is not just increased efficiency, but a more fulfilling and sustainable way of working.</p>
    `,
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  const relatedArticles = Object.entries(articles)
    .filter(([slug, art]) => art.category === article.category && slug !== params.slug)
    .slice(0, 2)
    .map(([slug, art]) => ({ ...art, slug }))

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10 backdrop-blur-sm bg-white/95">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </Link>
            <div className="font-serif text-xl font-bold text-slate-900">Luxe Blog</div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Enhanced Article Header */}
        <header className="mb-12">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium rounded-full mb-6">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed font-light">{article.excerpt}</p>
          </div>

          {/* Enhanced Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-slate-500 mb-8 pb-6 border-b border-slate-200">
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              <span className="font-medium">{article.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>{article.publishedAt}</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <button className="flex items-center text-slate-500 hover:text-red-500 transition-colors">
                <Heart size={18} className="mr-1" />
                <span className="text-sm">24</span>
              </button>
              <button className="flex items-center text-slate-500 hover:text-blue-500 transition-colors">
                <Bookmark size={18} />
              </button>
              <button className="flex items-center text-slate-500 hover:text-slate-700 transition-colors">
                <Share2 size={18} />
              </button>
            </div>
          </div>

          {/* Enhanced Hero Image */}
          <div className="relative h-64 md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </header>

        {/* Enhanced Article Body */}
        <div
          className="prose prose-xl prose-slate max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed prose-li:text-slate-700 prose-strong:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-800"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {relatedArticles.length > 0 && (
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedArticles.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`} className="group">
                  <article className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={related.image || "/placeholder.svg"}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-blue-600 font-medium">{related.category}</span>
                      <h4 className="text-lg font-serif font-semibold text-slate-900 mt-2 mb-3 group-hover:text-blue-600 transition-colors">
                        {related.title}
                      </h4>
                      <p className="text-slate-600 text-sm line-clamp-2">{related.excerpt}</p>
                      <div className="flex items-center mt-4 text-xs text-slate-500">
                        <span>{related.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Enhanced Article Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all duration-300 hover:scale-105 font-medium"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to All Articles
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-500">Share this article:</span>
              <div className="flex gap-3">
                <button className="w-10 h-10 bg-slate-100 hover:bg-blue-500 hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Share2 size={16} />
                </button>
                <button className="w-10 h-10 bg-slate-100 hover:bg-red-500 hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Heart size={16} />
                </button>
                <button className="w-10 h-10 bg-slate-100 hover:bg-green-500 hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Bookmark size={16} />
                </button>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </div>
  )
}
