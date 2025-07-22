"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Save, Eye, ArrowLeft, Plus, Trash2, ImageIcon, Bold, Italic, List, LinkIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NewArticlePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  const [article, setArticle] = useState({
    title: "",
    slug: "",
    excerpt: "",
    category: "",
    readTime: 5,
    intro: "",
    sections: [
      { title: "What It Actually Is", content: "" },
      { title: "What It's Made Of", content: "" },
      { title: "What The Law Says", content: "" },
      { title: "What To Look For On The Label", content: "" },
      { title: "Simple Swaps You Can Make", content: "" },
    ],
    status: "draft",
  })

  useEffect(() => {
    const token = localStorage.getItem("nosh-auth")
    if (!token) {
      router.push("/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim()
  }

  const handleTitleChange = (title: string) => {
    setArticle((prev) => ({
      ...prev,
      title,
      slug: generateSlug(title),
    }))
  }

  const handleSectionChange = (index: number, field: "title" | "content", value: string) => {
    setArticle((prev) => ({
      ...prev,
      sections: prev.sections.map((section, i) => (i === index ? { ...section, [field]: value } : section)),
    }))
  }

  const addSection = () => {
    setArticle((prev) => ({
      ...prev,
      sections: [...prev.sections, { title: "", content: "" }],
    }))
  }

  const removeSection = (index: number) => {
    setArticle((prev) => ({
      ...prev,
      sections: prev.sections.filter((_, i) => i !== index),
    }))
  }

  const handleSave = (status: "draft" | "published") => {
    // Here you would save to Sanity
    console.log("Saving article:", { ...article, status })
    alert(`Article ${status === "draft" ? "saved as draft" : "published"}!`)
  }

  if (!isAuthenticated) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/admin">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
              <h1 className="text-xl font-semibold">New Article</h1>
              <Badge variant="secondary">Draft</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" onClick={() => handleSave("draft")}>
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
              <Button onClick={() => handleSave("published")}>
                <Eye className="w-4 h-4 mr-2" />
                Publish
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info */}
            <Card>
              <CardHeader>
                <CardTitle>Article Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={article.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="What Actually Is..."
                  />
                </div>

                <div>
                  <Label htmlFor="slug">URL Slug</Label>
                  <Input
                    id="slug"
                    value={article.slug}
                    onChange={(e) => setArticle((prev) => ({ ...prev, slug: e.target.value }))}
                    placeholder="what-actually-is-sourdough"
                  />
                </div>

                <div>
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    value={article.excerpt}
                    onChange={(e) => setArticle((prev) => ({ ...prev, excerpt: e.target.value }))}
                    placeholder="A brief description that appears in article previews..."
                    rows={3}
                  />
                  <p className="text-sm text-gray-500 mt-1">{article.excerpt.length}/200 characters</p>
                </div>

                <div>
                  <Label htmlFor="intro">Introduction</Label>
                  <Textarea
                    id="intro"
                    value={article.intro}
                    onChange={(e) => setArticle((prev) => ({ ...prev, intro: e.target.value }))}
                    placeholder="Opening paragraph that hooks the reader..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Article Sections */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Article Sections</CardTitle>
                  <Button variant="outline" size="sm" onClick={addSection}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Section
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {article.sections.map((section, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                        <Input
                          value={section.title}
                          onChange={(e) => handleSectionChange(index, "title", e.target.value)}
                          placeholder="Section title..."
                          className="font-medium"
                        />
                      </div>
                      {article.sections.length > 1 && (
                        <Button variant="ghost" size="sm" onClick={() => removeSection(index)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>

                    {/* Simple Toolbar */}
                    <div className="flex items-center space-x-2 mb-3 p-2 bg-gray-50 rounded">
                      <Button variant="ghost" size="sm">
                        <Bold className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Italic className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <List className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <LinkIcon className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ImageIcon className="w-4 h-4" />
                      </Button>
                    </div>

                    <Textarea
                      value={section.content}
                      onChange={(e) => handleSectionChange(index, "content", e.target.value)}
                      placeholder="Write your content here... You can use markdown formatting."
                      rows={8}
                      className="font-mono text-sm"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publish Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Publish Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={article.category}
                    onValueChange={(value) => setArticle((prev) => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bread-grains">Bread & Grains</SelectItem>
                      <SelectItem value="dairy">Dairy</SelectItem>
                      <SelectItem value="label-reading">Label Reading</SelectItem>
                      <SelectItem value="processed-foods">Processed Foods</SelectItem>
                      <SelectItem value="simple-swaps">Simple Swaps</SelectItem>
                      <SelectItem value="cooking-methods">Cooking Methods</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="readTime">Read Time (minutes)</Label>
                  <Input
                    id="readTime"
                    type="number"
                    value={article.readTime}
                    onChange={(e) =>
                      setArticle((prev) => ({ ...prev, readTime: Number.parseInt(e.target.value) || 5 }))
                    }
                    min="1"
                    max="30"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Featured Image */}
            <Card>
              <CardHeader>
                <CardTitle>Featured Image</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-sm text-gray-600 mb-4">Upload a featured image for your article</p>
                  <Button variant="outline">Choose Image</Button>
                </div>
              </CardContent>
            </Card>

            {/* SEO Preview */}
            <Card>
              <CardHeader>
                <CardTitle>SEO Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-blue-600 text-sm truncate">
                    nosh.com/articles/{article.slug || "article-slug"}
                  </div>
                  <div className="text-lg text-blue-800 font-medium">{article.title || "Article Title"}</div>
                  <div className="text-sm text-gray-600">
                    {article.excerpt || "Article excerpt will appear here..."}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
