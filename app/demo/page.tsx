import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, ArrowRight } from "lucide-react"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Header />
      <div className="container py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            See instantCV in Action
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Watch how easy it is to create a professional, ATS-compliant resume in just minutes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <div className="aspect-video bg-gray-900 relative flex items-center justify-center">
              <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90">
                <Play className="h-6 w-6 mr-2" />
                Play Demo Video
              </Button>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <CardHeader>
              <CardTitle>Interactive Demo</CardTitle>
              <CardDescription>
                See how our AI-powered resume builder helps you create professional resumes with LinkedIn integration
                and ATS optimization.
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Ready to build your resume?</h2>
            <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90">
              Start Building Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
