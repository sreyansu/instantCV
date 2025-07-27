import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/instantcv-logo.png" alt="instantCV" width={120} height={40} className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Create professional, ATS-compliant resumes instantly with AI assistance.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features" className="text-gray-600 hover:text-brand-orange dark:text-gray-300">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/templates" className="text-gray-600 hover:text-brand-orange dark:text-gray-300">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-brand-orange dark:text-gray-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-gray-600 hover:text-brand-orange dark:text-gray-300">
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-gray-600 hover:text-brand-orange dark:text-gray-300">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-brand-orange dark:text-gray-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-brand-orange dark:text-gray-300">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-brand-orange dark:text-gray-300">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-brand-orange dark:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-brand-orange dark:text-gray-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-brand-orange dark:text-gray-300">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-gray-600 dark:text-gray-300">
          <p>&copy; 2024 instantCV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
