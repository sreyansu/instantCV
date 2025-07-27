import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: ["1 resume", "3 template options", "Basic ATS optimization", "PDF download", "Email support"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description: "Best for job seekers",
    features: [
      "Unlimited resumes",
      "All premium templates",
      "Advanced ATS optimization",
      "LinkedIn import",
      "AI-powered suggestions",
      "Priority support",
      "Custom branding",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$29.99",
    period: "/month",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Bulk resume creation",
      "Custom templates",
      "API access",
      "Dedicated support",
      "Analytics dashboard",
    ],
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Header />
      <div className="container py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the plan that works best for you. All plans include our core features and ATS optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${plan.popular ? "border-brand-orange shadow-lg scale-105" : ""}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-orange">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-600 dark:text-gray-300">{plan.period}</span>}
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular ? "bg-brand-orange hover:bg-brand-orange/90" : "bg-transparent"}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.name === "Free" ? "Get Started" : "Choose Plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
