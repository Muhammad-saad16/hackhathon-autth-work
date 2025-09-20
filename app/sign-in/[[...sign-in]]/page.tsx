"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignInPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Futuristic background */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          {/* Geometric pattern overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full">
              {/* Geometric lines and shapes */}
              <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                {/* Geometric pattern */}
                <g stroke="url(#grad1)" strokeWidth="2" fill="none">
                  <path d="M0,300 L200,100 L400,300 L600,100 L800,300" />
                  <path d="M0,400 L150,200 L300,400 L450,200 L600,400 L750,200" />
                  <path
                    d="M100,0 L100,600 M200,0 L200,600 M300,0 L300,600 M400,0 L400,600 M500,0 L500,600 M600,0 L600,600 M700,0 L700,600"
                    opacity="0.3"
                  />
                  <path
                    d="M0,100 L800,100 M0,200 L800,200 M0,300 L800,300 M0,400 L800,400 M0,500 L800,500"
                    opacity="0.2"
                  />
                </g>
                {/* Glowing elements */}
                <circle cx="150" cy="150" r="3" fill="#8B5CF6" opacity="0.8">
                  <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="350" cy="250" r="2" fill="#3B82F6" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="550" cy="180" r="4" fill="#1E40AF" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.5s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>
        </div>

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col justify-center items-start p-12 text-white">
          <div className="mb-8">
            <div className="text-sm font-medium tracking-wider opacity-80 mb-4">INSPIRED BY THE FUTURE:</div>
            <h1 className="text-4xl font-bold tracking-tight">THE VISION UI DASHBOARD</h1>
          </div>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-slate-900">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Nice to see you!</h2>
            <p className="text-slate-400">Enter your email and password to sign in</p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Your email address"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Your password"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" className="border-slate-600 data-[state=checked]:bg-blue-600" />
              <Label htmlFor="remember" className="text-slate-300 text-sm">
                Remember me
              </Label>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3">SIGN IN</Button>

            <div className="text-center">
              <span className="text-slate-400">Don't have an account? </span>
              <Link href="/sign-up" className="text-white hover:text-blue-400 font-medium">
                Sign up
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-slate-500 mt-12">
            <p>© 2021, Made with ❤️ by Simmmple & Creative Tim for a better web</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link href="#" className="hover:text-slate-400">
                Marketplace
              </Link>
              <Link href="#" className="hover:text-slate-400">
                Blog
              </Link>
              <Link href="#" className="hover:text-slate-400">
                License
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
