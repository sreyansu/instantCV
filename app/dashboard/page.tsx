"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, FileText, Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"

interface Resume {
  id: string
  title: string
  template_id: string
  updated_at: string
}

export default function DashboardPage() {
  const { user, loading: authLoading } = useAuth()
  const [resumes, setResumes] = useState<Resume[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      fetchResumes()
    }
  }, [user])

  const fetchResumes = async () => {
    if (!user) return
    setLoading(true)
    try {
      const token = await user.getIdToken()
      const response = await fetch("/api/resumes", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await response.json()
      setResumes(data.resumes || [])
    } catch (error) {
      console.error("Error fetching resumes:", error)
    } finally {
      setLoading(false)
    }
  }

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <Header />
        <div className="container py-24">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <Header />
        <div className="container py-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Please sign in to access your dashboard</h1>
            <Button asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Header />
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome back, {user.displayName || 'User'}!</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Manage your resumes and create new ones</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="border-2 border-dashed border-gray-300 hover:border-brand-orange transition-colors cursor-pointer">
            <CardHeader className="text-center py-12">
              <div className="mx-auto w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mb-4">
                <Plus className="h-6 w-6 text-brand-orange" />
              </div>
              <CardTitle>Create New Resume</CardTitle>
              <CardDescription>Start building your professional resume</CardDescription>
            </CardHeader>
            <CardContent className="text-center pb-6">
              <Button className="bg-brand-orange hover:bg-brand-orange/90" asChild>
                <Link href="/builder">Get Started</Link>
              </Button>
            </CardContent>
          </Card>

          {resumes.map((resume) => (
            <Card key={resume.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-brand-navy/10 rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-brand-navy" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{resume.title}</CardTitle>
                      <CardDescription className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>Updated {new Date(resume.updated_at).toLocaleDateString()}</span>
                      </CardDescription>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={`/builder/${resume.id}`}>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                    <Link href={`/builder/${resume.id}`}>Edit</Link>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                    <Link href={`/preview/${resume.id}`}>Preview</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {resumes.length === 0 && (
          <div className="text-center py-12">
            <div className="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
              <FileText className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No resumes yet</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Create your first resume to get started</p>
            <Button className="bg-brand-orange hover:bg-brand-orange/90" asChild>
              <Link href="/builder">Create Your First Resume</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
