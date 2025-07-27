"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/instantcv-logo.png" alt="instantCV" width={120} height={40} className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/features" className="text-sm font-medium hover:text-brand-orange transition-colors">
            Features
          </Link>
          <Link href="/templates" className="text-sm font-medium hover:text-brand-orange transition-colors">
            Templates
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-brand-orange transition-colors">
            Pricing
          </Link>
          <ThemeToggle />
          <Button variant="outline" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
          <Button className="bg-brand-orange hover:bg-brand-orange/90" asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-4">
            <Link href="/features" className="block text-sm font-medium hover:text-brand-orange">
              Features
            </Link>
            <Link href="/templates" className="block text-sm font-medium hover:text-brand-orange">
              Templates
            </Link>
            <Link href="/pricing" className="block text-sm font-medium hover:text-brand-orange">
              Pricing
            </Link>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button className="w-full bg-brand-orange hover:bg-brand-orange/90" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
