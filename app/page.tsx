import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Search } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const featuredArticles = [
    {
      id: 1,
      title: "What Actually Is Sourdough Bread?",
      excerpt:
        "Beyond the trendy name lies a fascinating fermentation process. Let's break down what makes sourdough different from regular bread.",
      category: "Bread & Grains",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Decoding 'Natural Flavors' on Food Labels",
      excerpt:
        "That innocent-looking ingredient appears everywhere. Here's what it actually means and what the law requires.",
      category: "Label Reading",
      readTime: "4 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Greek Yogurt vs Regular Yogurt: The Real Difference",
      excerpt:
        "It's not just marketing. Understanding the actual process reveals why one costs more and what you're really getting.",
      category: "Dairy",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const categories = [
    { name: "Bread & Grains", count: 12, icon: "🌾" },
    { name: "Dairy", count: 8, icon: "🥛" },
    { name: "Label Reading", count: 15, icon: "🏷️" },
    { name: "Processed Foods", count: 10, icon: "📦" },
    { name: "Simple Swaps", count: 9, icon: "🔄" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-gray-900">NoSh**</h1>
              <Badge variant="outline" className="hidden sm:inline-flex">
                Real Food, Real Talk
              </Badge>
            </div>
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
              <Button variant="outline" size="sm">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </nav>
            <Button className="md:hidden bg-transparent" variant="outline" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Understanding Food,
              <br />
              <span className="text-blue-600">Simply & Honestly</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              No wellness trends. No extremes. Just clear, practical explanations of what you're actually eating — from
              a public health nurse who gets it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="w-full sm:w-auto">
                <BookOpen className="w-5 h-5 mr-2" />
                Start Reading
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                Browse Categories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Each Article Breaks Down</h3>
            <p className="text-gray-600 text-lg">
              Every piece follows the same clear structure to help you understand food completely
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤔</span>
                </div>
                <CardTitle className="text-lg">What It Actually Is</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">When you only kinda half-know what something is</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧪</span>
                </div>
                <CardTitle className="text-lg">What It's Made Of</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Fancy words explained in plain English</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <CardTitle className="text-lg">What The Law Says</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Legal requirements and what they mean for you</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛒</span>
                </div>
                <CardTitle className="text-lg">Simple Swaps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Practical alternatives you can find anywhere</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Latest Articles</h3>
              <p className="text-gray-600">Fresh insights into everyday foods</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/articles">
                View All <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight hover:text-blue-600 transition-colors">
                    <Link href={`/articles/${article.id}`}>{article.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{article.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Explore by Category</h3>
            <p className="text-gray-600 text-lg">Find exactly what you're curious about</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {categories.map((category) => (
              <Card key={category.name} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="text-center pb-2">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-sm text-gray-500">{category.count} articles</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-blue-100 text-lg mb-8">
              Get new articles delivered straight to your inbox. No spam, just real food insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="bg-white" />
              <Button variant="secondary" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>

            <p className="text-blue-200 text-sm mt-4">Unsubscribe anytime. We respect your inbox.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h4 className="text-2xl font-bold mb-4">NoSh**</h4>
              <p className="text-gray-400 mb-4 max-w-md">
                Understanding food simply and honestly. Created by Jenni, a public health nurse and nutritionist who
                believes in real talk about real food.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Explore</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/articles" className="hover:text-white transition-colors">
                    All Articles
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="hover:text-white transition-colors">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Connect</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/newsletter" className="hover:text-white transition-colors">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 NoSh**. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
