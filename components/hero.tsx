"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="container py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-300 dark:ring-gray-100/10 dark:hover:ring-gray-100/20">
            <span className="text-brand-orange font-semibold">New:</span> LinkedIn profile import now available!{" "}
            <Link href="/features" className="font-semibold text-brand-orange">
              <span className="absolute inset-0" aria-hidden="true" />
              Learn more <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
          Create <span className="text-brand-orange">ATS-Compliant</span> Resumes{" "}
          <span className="text-brand-teal">Instantly</span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Build professional, ATS-optimized resumes in minutes with AI assistance. Import from LinkedIn, choose from
          expert templates, and land your dream job.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90" asChild>
            <Link href="/signup">
              Start Building Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/demo">View Demo</Link>
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-brand-orange/10 p-3 mb-4">
              <Zap className="h-6 w-6 text-brand-orange" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Lightning Fast</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Create professional resumes in under 5 minutes
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-brand-teal/10 p-3 mb-4">
              <Shield className="h-6 w-6 text-brand-teal" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">ATS Optimized</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              90%+ ATS compliance rate with our smart templates
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-brand-navy/10 p-3 mb-4">
              <Download className="h-6 w-6 text-brand-navy" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Export Ready</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Download as PDF or share with a custom link</p>
          </div>
        </div>
      </div>
    </section>
  )
}
