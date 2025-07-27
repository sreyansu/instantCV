"use client"

import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { auth } from "@/lib/firebase"
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, OAuthProvider } from "firebase/auth";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()
  const router = useRouter()

  if (user) {
    router.push("/dashboard")
    return null
  }

  const handleSignIn = async () => {
    setLoading(true)
    setError(null)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push("/dashboard")
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setLoading(true)
    setError(null)
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      router.push("/dashboard")
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleAppleSignIn = async () => {
    setLoading(true)
    setError(null)
    try {
      const provider = new OAuthProvider('apple.com');
      await signInWithPopup(auth, provider);
      router.push('/dashboard');
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Header />
      <div className="container py-24">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Welcome back</CardTitle>
              <CardDescription>Sign in to your instantCV account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              <div className="space-y-2">
                <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={loading}>
                  <GoogleIcon className="mr-2 h-4 w-4" />
                  {loading ? 'Signing in...' : 'Continue with Google'}
                </Button>
                <Button variant="outline" className="w-full" onClick={handleAppleSignIn} disabled={loading}>
                  <Image src="/images/apple.png" alt="Apple logo" width={16} height={16} className="mr-2" />
                  {loading ? 'Signing in...' : 'Continue with Apple'}
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>

              <Button className="w-full bg-brand-navy hover:bg-brand-navy/90" onClick={handleSignIn} disabled={loading}>{loading ? 'Signing in...' : 'Sign In'}</Button>

              <div className="text-center text-sm">
                <span className="text-muted-foreground">Don't have an account? </span>
                <Link href="/signup" className="text-brand-orange hover:underline">
                  Sign up
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
