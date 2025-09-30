import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center space-y-8 max-w-2xl mx-auto py-20">
          {/* 404 Number */}
          <div className="relative">
            <h1 className="text-[150px] sm:text-[200px] font-bold text-foreground/5 leading-none select-none">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Page Not Found</h2>
                <p className="text-lg text-muted-foreground max-w-md mx-auto">
                  The page you're looking for doesn't exist or has been moved to a different location.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">You might be interested in:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/services" className="text-primary hover:underline">
                Our Services
              </Link>
              <Link href="/portfolio" className="text-primary hover:underline">
                Portfolio
              </Link>
              <Link href="/about" className="text-primary hover:underline">
                About Us
              </Link>
              <Link href="/blog" className="text-primary hover:underline">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
