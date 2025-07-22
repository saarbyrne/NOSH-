"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  PlusCircle,
  FileText,
  Eye,
  Edit,
  Trash2,
  Search,
  LogOut,
  BarChart3,
  Users,
  BookOpen,
  Settings,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("nosh-auth")
    if (!token) {
      router.push("/login")
    } else {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("nosh-auth")
    router.push("/login")
  }

  const articles = [
    {
      id: 1,
      title: "What Actually Is Sourdough Bread?",
      status: "published",
      category: "Bread & Grains",
      publishedAt: "Dec 15, 2024",
      views: 1234,
    },
    {
      id: 2,
      title: "Decoding 'Natural Flavors' on Food Labels",
      status: "published",
      category: "Label Reading",
      publishedAt: "Dec 12, 2024",
      views: 987,
    },
    {
      id: 3,
      title: "Understanding Artificial Sweeteners",
      status: "draft",
      category: "Label Reading",
      publishedAt: null,
      views: 0,
    },
  ]

  const stats = [
    { label: "Total Articles", value: "24", icon: FileText, color: "text-blue-600" },
    { label: "Published", value: "18", icon: BookOpen, color: "text-green-600" },
    { label: "Total Views", value: "12.4K", icon: Eye, color: "text-purple-600" },
    { label: "Newsletter Subscribers", value: "1,247", icon: Users, color: "text-orange-600" },
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin panel...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">NoSh** Admin</h1>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                Content Management System
              </Badge>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" asChild>
                <Link href="/" target="_blank">
                  <Eye className="w-4 h-4 mr-2" />
                  View Site
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/admin/studio" target="_blank">
                  <Settings className="w-4 h-4 mr-2" />
                  Sanity Studio
                </Link>
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Jenni! 👋</h2>
          <p className="text-gray-600 text-lg">Manage your NoSh** content and see how your articles are performing.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-50`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <PlusCircle className="w-5 h-5 text-blue-600" />
                <span>Quick Actions</span>
              </CardTitle>
              <CardDescription>Common tasks to manage your content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start h-12 text-base" asChild>
                <Link href="/admin/articles/new">
                  <PlusCircle className="w-5 h-5 mr-3" />
                  Write New Article
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start h-12 text-base bg-transparent" asChild>
                <Link href="/admin/articles">
                  <FileText className="w-5 h-5 mr-3" />
                  Manage All Articles
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start h-12 text-base bg-transparent" asChild>
                <Link href="/admin/studio" target="_blank">
                  <Settings className="w-5 h-5 mr-3" />
                  Open Sanity Studio
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-green-600" />
                <span>Recent Activity</span>
              </CardTitle>
              <CardDescription>Your latest content updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Published "Sourdough Bread" article</span>
                  <span className="text-xs text-gray-500 ml-auto">2 hours ago</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">Updated "Natural Flavors" article</span>
                  <span className="text-xs text-gray-500 ml-auto">1 day ago</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm font-medium">Draft saved for "Artificial Sweeteners"</span>
                  <span className="text-xs text-gray-500 ml-auto">2 days ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Articles Management */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">Recent Articles</CardTitle>
                <CardDescription>Manage your published and draft content</CardDescription>
              </div>
              <Button asChild>
                <Link href="/admin/articles/new">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  New Article
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Search articles..." className="pl-10 h-11" />
              </div>
            </div>

            <div className="space-y-4">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-gray-900">{article.title}</h3>
                      <Badge
                        variant={article.status === "published" ? "default" : "secondary"}
                        className={article.status === "published" ? "bg-green-100 text-green-800 border-green-200" : ""}
                      >
                        {article.status}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="font-medium">{article.category}</span>
                      {article.publishedAt && <span>{article.publishedAt}</span>}
                      <span>{article.views.toLocaleString()} views</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" title="Preview">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" asChild title="Edit">
                      <Link href={`/admin/articles/${article.id}/edit`}>
                        <Edit className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" title="Delete">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Button variant="outline" asChild>
                <Link href="/admin/articles">View All Articles ({articles.length + 21} total)</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
