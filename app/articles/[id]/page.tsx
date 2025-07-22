import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react"
import Link from "next/link"

export default function ArticlePage() {
  const article = {
    id: 1,
    title: "What Actually Is Sourdough Bread?",
    category: "Bread & Grains",
    readTime: "5 min read",
    publishDate: "December 15, 2024",
    image: "/placeholder.svg?height=400&width=800",
    content: {
      intro:
        "You've seen it everywhere - from trendy bakeries to your local supermarket. Sourdough bread has become the poster child of 'artisanal' baking. But what actually makes sourdough different from regular bread? Let's break it down without the fancy jargon.",
      sections: [
        {
          title: "What It Actually Is",
          content:
            "Sourdough is bread made using a 'starter' - a mixture of flour and water that's been left to ferment naturally. This starter contains wild yeast and bacteria that make the bread rise and give it that distinctive tangy flavor. Unlike regular bread that uses commercial yeast, sourdough relies on this living culture that can be maintained for years (some starters are decades old!).",
        },
        {
          title: "What It's Made Of",
          content:
            "The basic ingredients are simple: flour, water, salt, and the starter. The magic happens in the starter itself, which contains:\n\n• Wild yeast (Saccharomyces cerevisiae and others) - these make the bread rise\n• Lactic acid bacteria - these create the sour flavor and help preserve the bread\n• Acetic acid bacteria - these add complexity to the flavor\n\nNo commercial yeast, no preservatives needed. The fermentation process naturally creates an acidic environment that keeps harmful bacteria away.",
        },
        {
          title: "What The Law Says",
          content:
            "Here's where it gets interesting. In many countries, there's no legal definition of 'sourdough.' This means manufacturers can add commercial yeast to speed up production and still call it sourdough. In the EU, traditional sourdough must be made only with the starter, but 'sourdough bread' can contain added yeast.\n\nIn the US, the FDA doesn't regulate the term at all. This is why you'll find 'sourdough' breads that taste nothing like traditional sourdough - they might just have a bit of starter added for flavor while relying on commercial yeast for rising.",
        },
        {
          title: "What To Look For On The Label",
          content:
            "Real sourdough should have a short ingredient list:\n\n✅ Look for: Flour, water, salt, sourdough starter (or 'sourdough culture')\n❌ Avoid: Commercial yeast, preservatives, dough conditioners, high fructose corn syrup\n\nIf you see 'yeast' in the ingredients, it's not traditional sourdough. The bread should also feel denser than regular bread and have a slightly sour smell.",
        },
        {
          title: "Simple Swaps You Can Make",
          content:
            "• **At the supermarket**: Look for brands that specifically say 'wild yeast only' or 'no added yeast'\n• **Local bakeries**: Ask if their sourdough uses only starter or if they add commercial yeast\n• **Make your own**: Starting a sourdough culture is easier than you think - just flour, water, and patience\n• **Frozen options**: Some frozen sourdough breads are actually more authentic than fresh ones from big brands\n\nRemember: real sourdough takes time. If a bakery is pumping out sourdough loaves every few hours, they're probably using commercial yeast to speed things up.",
        },
      ],
    },
  }

  const relatedArticles = [
    {
      id: 2,
      title: "Whole Wheat vs Whole Grain: Not the Same Thing",
      category: "Bread & Grains",
      readTime: "5 min read",
    },
    {
      id: 3,
      title: "Understanding Organic Labels: What They Actually Mean",
      category: "Label Reading",
      readTime: "7 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-gray-900">NoSh**</h1>
              <Badge variant="outline" className="hidden sm:inline-flex">
                Real Food, Real Talk
              </Badge>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/articles" className="text-gray-600 hover:text-gray-900 transition-colors">
                All Articles
              </Link>
              <Link href="/categories" className="text-gray-600 hover:text-gray-900 transition-colors">
                Categories
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About Jenni
              </Link>
            </nav>
            <Button className="md:hidden bg-transparent" variant="outline" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <div className="mb-6">
          <Button variant="ghost" asChild>
            <Link href="/articles">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articles
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="secondary">{article.category}</Badge>
            <div className="flex items-center text-gray-500 text-sm gap-4">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {article.publishDate}
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{article.title}</h1>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">J</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Jenni</p>
                <p className="text-sm text-gray-500">Public Health Nurse & Nutritionist</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">{article.content.intro}</p>

          {article.content.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  {index + 1}
                </span>
                {section.title}
              </h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">{section.content}</div>
            </div>
          ))}
        </article>

        <Separator className="my-12" />

        {/* Author Bio */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 font-bold text-xl">J</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">About Jenni</h3>
              <p className="text-gray-700 leading-relaxed">
                I'm a public health nurse and nutritionist who created NoSh** to write about food in a way that's
                honest, practical, and real. No wellness trends or extremes - just clear explanations of what you're
                actually eating.
              </p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedArticles.map((relatedArticle) => (
              <Card key={relatedArticle.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {relatedArticle.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{relatedArticle.readTime}</span>
                  </div>
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors">
                    <Link href={`/articles/${relatedArticle.id}`}>{relatedArticle.title}</Link>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
