import { UserButton } from "@clerk/nextjs"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <UserButton afterSignOutUrl="/" />
        </div>

        <div className="bg-slate-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Welcome to Vision UI Dashboard</h2>
          <p className="text-slate-400">You have successfully signed in! This is your protected dashboard.</p>
        </div>
      </div>
    </div>
  )
}
