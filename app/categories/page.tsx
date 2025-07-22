import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function CategoriesPage() {
  const categories = [
    {
      name: "Bread & Grains",
      slug: "bread-grains",
      description: "Understanding different types of bread, grains, and what makes them unique",
      articleCount: 12,
      icon: "🌾",
      color: "bg-amber-100 text-amber-800",
      recentArticles: [
        "What Actually Is Sourdough Bread?",
        "Whole Wheat vs Whole Grain: Not the Same Thing",
        "Understanding Gluten: Beyond the Buzz",
      ],
    },
    {
      name: "Dairy",
      slug: "dairy",
      description: "From milk processing to cheese making - dairy products decoded",
      articleCount: 8,
      icon: "🥛",
      color: "bg-blue-100 text-blue-800",
      recentArticles: [
        "Greek Yogurt vs Regular Yogurt: The Real Difference",
        "What Makes Cheese 'Processed'?",
        "Raw Milk vs Pasteurized: The Facts",
      ],
    },
    {
      name: "Label Reading",
      slug: "label-reading",
      description: "Decoding ingredient lists and understanding what labels really mean",
      articleCount: 15,
      icon: "🏷️",
      color: "bg-green-100 text-green-800",
      recentArticles: [
        "Decoding 'Natural Flavors' on Food Labels",
        "Understanding Organic Labels: What They Actually Mean",
        "What Does 'No Added Sugar' Really Mean?",
      ],
    },
    {
      name: "Processed Foods",
      slug: "processed-foods",
      description: "Understanding the spectrum of food processing and what it means for nutrition",
      articleCount: 10,
      icon: "📦",
      color: "bg-purple-100 text-purple-800",
      recentArticles: [
        "Ultra-Processed vs Processed: The Important Difference",
        "How Frozen Vegetables Are Made",
        "What Happens to Food During Canning?",
      ],
    },
    {
      name: "Simple Swaps",
      slug: "simple-swaps",
      description: "Practical alternatives you can find in any regular supermarket",
      articleCount: 9,
      icon: "🔄",
      color: "bg-orange-100 text-orange-800",
      recentArticles: [
        "Better Breakfast Cereal Options",
        "Healthier Snack Alternatives That Actually Taste Good",
        "Simple Pasta Sauce Upgrades",
      ],
    },
    {
      name: "Cooking Methods",
      slug: "cooking-methods",
      description: "How different cooking techniques affect nutrition and flavor",
      articleCount: 6,
      icon: "🍳",
      color: "bg-red-100 text-red-800",
      recentArticles: [
        "Steaming vs Boiling: Which Preserves More Nutrients?",
        "The Science of Grilling and Charring",
        "Why Some Vegetables Are Better Cooked",
      ],
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
              <Link href="/categories" className="text-blue-600 font-medium">
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
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find exactly what you're curious about. Each category breaks down complex food topics into clear, practical
            insights.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.slug} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{category.icon}</div>
                  <Badge className={category.color}>{category.articleCount} articles</Badge>
                </div>
                <CardTitle className="text-xl mb-2">
                  <Link href={`/categories/${category.slug}`} className="hover:text-blue-600 transition-colors">
                    {category.name}
                  </Link>
                </CardTitle>
                <CardDescription className="text-gray-600">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <h4 className="font-medium text-sm text-gray-900">Recent articles:</h4>
                  <ul className="space-y-1">
                    {category.recentArticles.map((article, index) => (
                      <li key={index} className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                        <Link href={`/articles/${index + 1}`}>• {article}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                  <Link href={`/categories/${category.slug}`}>View All {category.name} Articles</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Never Miss New Content</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Get notified when we publish new articles in your favorite categories.
          </p>
          <Button size="lg">Subscribe to Newsletter</Button>
        </div>
      </div>
    </div>
  )
}
