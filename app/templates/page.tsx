import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const templates = [
  {
    id: "modern",
    name: "Modern Professional",
    description: "Clean, contemporary design perfect for tech and creative roles",
    atsScore: 95,
    preview: "/placeholder.svg?height=400&width=300&text=Modern+Template",
  },
  {
    id: "classic",
    name: "Classic Executive",
    description: "Traditional layout ideal for corporate and executive positions",
    atsScore: 98,
    preview: "/placeholder.svg?height=400&width=300&text=Classic+Template",
  },
  {
    id: "minimal",
    name: "Minimal Clean",
    description: "Simple, elegant design that highlights your content",
    atsScore: 92,
    preview: "/placeholder.svg?height=400&width=300&text=Minimal+Template",
  },
  {
    id: "creative",
    name: "Creative Portfolio",
    description: "Eye-catching design for creative professionals",
    atsScore: 88,
    preview: "/placeholder.svg?height=400&width=300&text=Creative+Template",
  },
]

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Header />
      <div className="container py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            ATS-Optimized Resume Templates
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose from our collection of professionally designed templates, all optimized for ATS systems with 90%+
            compatibility rates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {templates.map((template) => (
            <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-800">
                <img
                  src={template.preview || "/placeholder.svg"}
                  alt={template.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  >
                    {template.atsScore}% ATS
                  </Badge>
                </div>
                <CardDescription>{template.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-brand-orange hover:bg-brand-orange/90">Use This Template</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
