import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Features } from "@/components/features"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Header />
      <div className="container py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Powerful Features for Professional Resumes
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to create, optimize, and share ATS-compliant resumes that get you noticed by hiring
            managers.
          </p>
        </div>
        <Features />
      </div>
      <Footer />
    </div>
  )
}
