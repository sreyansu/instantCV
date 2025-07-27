"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Linkedin, Save, Download, Eye } from "lucide-react"

export default function BuilderPage() {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      linkedinUrl: "",
      summary: "",
    },
  })

  const handleInputChange = (section: string, field: string, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value,
      },
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Header />
      <div className="container py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Resume Builder</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Create your professional resume step by step</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
              <Linkedin className="h-4 w-4" />
              <span>Import from LinkedIn</span>
            </Button>
            <Button variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button variant="outline">
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button className="bg-brand-orange hover:bg-brand-orange/90">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Add your basic contact information and professional summary</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          value={resumeData.personalInfo.fullName}
                          onChange={(e) => handleInputChange("personalInfo", "fullName", e.target.value)}
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={resumeData.personalInfo.email}
                          onChange={(e) => handleInputChange("personalInfo", "email", e.target.value)}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={resumeData.personalInfo.phone}
                          onChange={(e) => handleInputChange("personalInfo", "phone", e.target.value)}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={resumeData.personalInfo.location}
                          onChange={(e) => handleInputChange("personalInfo", "location", e.target.value)}
                          placeholder="New York, NY"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="linkedinUrl">LinkedIn URL</Label>
                      <Input
                        id="linkedinUrl"
                        value={resumeData.personalInfo.linkedinUrl}
                        onChange={(e) => handleInputChange("personalInfo", "linkedinUrl", e.target.value)}
                        placeholder="https://linkedin.com/in/johndoe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="summary">Professional Summary</Label>
                      <Textarea
                        id="summary"
                        value={resumeData.personalInfo.summary}
                        onChange={(e) => handleInputChange("personalInfo", "summary", e.target.value)}
                        placeholder="Brief professional summary highlighting your key skills and experience..."
                        rows={4}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="experience">
                <Card>
                  <CardHeader>
                    <CardTitle>Work Experience</CardTitle>
                    <CardDescription>Add your professional work experience</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-500 py-8">Experience section coming soon...</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="education">
                <Card>
                  <CardHeader>
                    <CardTitle>Education</CardTitle>
                    <CardDescription>Add your educational background</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-500 py-8">Education section coming soon...</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="skills">
                <Card>
                  <CardHeader>
                    <CardTitle>Skills</CardTitle>
                    <CardDescription>List your technical and soft skills</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-500 py-8">Skills section coming soon...</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
                <CardDescription>See how your resume looks in real-time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-white dark:bg-gray-900 border rounded-lg p-6 min-h-[600px]">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {resumeData.personalInfo.fullName || "Your Name"}
                    </h2>
                    <div className="text-gray-600 dark:text-gray-300 space-y-1">
                      {resumeData.personalInfo.email && <p>{resumeData.personalInfo.email}</p>}
                      {resumeData.personalInfo.phone && <p>{resumeData.personalInfo.phone}</p>}
                      {resumeData.personalInfo.location && <p>{resumeData.personalInfo.location}</p>}
                    </div>
                  </div>

                  {resumeData.personalInfo.summary && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 border-b">
                        Professional Summary
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">{resumeData.personalInfo.summary}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
