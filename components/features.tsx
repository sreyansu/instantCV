import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, FileText, Shield, Download, Sparkles, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Linkedin,
    title: "LinkedIn Integration",
    description: "Import your professional data directly from LinkedIn with one click",
    color: "text-blue-600",
  },
  {
    icon: FileText,
    title: "ATS-Compliant Templates",
    description: "Choose from professionally designed templates that pass ATS screening",
    color: "text-brand-orange",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Suggestions",
    description: "Get intelligent recommendations for content and formatting",
    color: "text-brand-teal",
  },
  {
    icon: Shield,
    title: "90%+ ATS Score",
    description: "Our templates are tested and optimized for maximum ATS compatibility",
    color: "text-green-600",
  },
  {
    icon: Download,
    title: "Multiple Export Options",
    description: "Download as PDF, share via link, or export to various formats",
    color: "text-purple-600",
  },
  {
    icon: BarChart3,
    title: "Real-time Preview",
    description: "See your changes instantly with our live preview feature",
    color: "text-brand-navy",
  },
]

export function Features() {
  return (
    <section className="container py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Everything you need to land your dream job
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Our comprehensive suite of tools helps you create, optimize, and share professional resumes that get noticed
          by both ATS systems and hiring managers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div
                className={`w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4`}
              >
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
