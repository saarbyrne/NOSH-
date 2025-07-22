import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const credentials = [
    "Public Health Nurse",
    "Registered Nutritionist",
    "Food Safety Certified",
    "Health Communication Specialist",
  ]

  const principles = [
    {
      title: "No Wellness Trends",
      description:
        "I don't chase fads or promote the latest superfood. Just solid, evidence-based information about real food.",
    },
    {
      title: "No Extremes",
      description:
        "Food isn't good or bad - it's just food. I help you understand what you're eating without judgment or fear-mongering.",
    },
    {
      title: "Practical Focus",
      description:
        "Every article includes actionable information you can use in a regular supermarket with a normal budget.",
    },
    {
      title: "Clear Communication",
      description:
        "Complex food science explained in plain English. No jargon, no assumptions about what you already know.",
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
              <Link href="/about" className="text-blue-600 font-medium">
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
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Hi, I'm Jenni</h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                I'm a public health nurse and nutritionist who got tired of seeing people confused and overwhelmed by
                conflicting food information. So I created NoSh** to write about food in a way that's honest, practical,
                and real.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                This isn't about wellness trends or extremes. It's about understanding what you're eating — clearly and
                simply.
              </p>
            </div>
            <div className="w-full md:w-80 flex-shrink-0">
              <div className="aspect-square bg-blue-100 rounded-lg flex items-center justify-center">
                <div className="w-32 h-32 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-4xl">J</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Background</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {credentials.map((credential, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="font-medium text-gray-900">{credential}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            I've spent over a decade working in public health, helping people navigate nutrition information that's
            often contradictory, overwhelming, or just plain wrong. I've seen how food marketing and wellness culture
            can make simple choices feel impossible.
          </p>
        </div>

        {/* Why NoSh** */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why NoSh**?</h2>
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <p className="text-lg text-gray-800 leading-relaxed">
              "I wanted a name that captured the frustration of cutting through food BS. NoSh** is about getting to the
              truth without the fluff, trends, or fear-mongering that dominates food media."
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Every article follows the same structure because I believe understanding food shouldn't be a guessing game.
            You deserve to know what something actually is, what it's made of, what regulations exist, and what
            practical choices you can make with that information.
          </p>
        </div>

        {/* My Principles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    {principle.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What You Won't Find Here */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What You Won't Find Here</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span>Miracle foods or superfoods that will change your life</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span>Demonizing entire food groups or ingredients</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span>Expensive specialty products you can only find online</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span>One-size-fits-all dietary advice</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span>Fear-based messaging about food safety</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Have a food question you'd like me to tackle? Suggestions for topics? I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button>
              <Mail className="w-4 h-4 mr-2" />
              Send Email
            </Button>
            <Button variant="outline">
              <ExternalLink className="w-4 h-4 mr-2" />
              Follow on LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
