import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import Link from "next/link"

export default function ArticlesPage() {
  const articles = [
    {
      id: 1,
      title: "What Actually Is Sourdough Bread?",
      excerpt:
        "Beyond the trendy name lies a fascinating fermentation process. Let's break down what makes sourdough different from regular bread.",
      category: "Bread & Grains",
      readTime: "5 min read",
      publishDate: "Dec 15, 2024",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Decoding 'Natural Flavors' on Food Labels",
      excerpt:
        "That innocent-looking ingredient appears everywhere. Here's what it actually means and what the law requires.",
      category: "Label Reading",
      readTime: "4 min read",
      publishDate: "Dec 12, 2024",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Greek Yogurt vs Regular Yogurt: The Real Difference",
      excerpt:
        "It's not just marketing. Understanding the actual process reveals why one costs more and what you're really getting.",
      category: "Dairy",
      readTime: "6 min read",
      publishDate: "Dec 10, 2024",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Understanding Organic Labels: What They Actually Mean",
      excerpt:
        "The organic label comes with strict rules. Here's what farmers must do to earn it and what it means for your food.",
      category: "Label Reading",
      readTime: "7 min read",
      publishDate: "Dec 8, 2024",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "Whole Wheat vs Whole Grain: Not the Same Thing",
      excerpt:
        "These terms get mixed up constantly. Understanding the difference helps you make better choices in the bread aisle.",
      category: "Bread & Grains",
      readTime: "5 min read",
      publishDate: "Dec 5, 2024",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "What Makes Cheese 'Processed'?",
      excerpt: "From fresh mozzarella to American cheese slices - understanding the spectrum of cheese processing.",
      category: "Dairy",
      readTime: "6 min read",
      publishDate: "Dec 3, 2024",
      image: "/placeholder.svg?height=200&width=300",
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
              <Link href="/articles" className="text-blue-600 font-medium">
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

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Articles</h1>
          <p className="text-xl text-gray-600">Every piece of content, organized and searchable</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>

          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="bread-grains">Bread & Grains</SelectItem>
                <SelectItem value="dairy">Dairy</SelectItem>
                <SelectItem value="label-reading">Label Reading</SelectItem>
                <SelectItem value="processed-foods">Processed Foods</SelectItem>
                <SelectItem value="simple-swaps">Simple Swaps</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="newest">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
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
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{article.publishDate}</span>
                  <Link
                    href={`/articles/${article.id}`}
                    className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  )
}
