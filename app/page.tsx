import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white">Vision UI Dashboard</h1>
          <p className="text-slate-400 text-lg">Inspired by the future</p>
        </div>

        <div className="flex gap-4 justify-center">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button asChild variant="outline" className="border-slate-600 text-white hover:bg-slate-800 bg-transparent">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
