export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-8">
      <div className="text-center space-y-6 max-w-2xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
            Hello World
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Welcome to your Next.js application
          </p>
        </div>
        
        <div className="pt-8">
          <div className="inline-block px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
            <p className="text-gray-700 font-medium">
              🚀 Your app is running successfully!
            </p>
          </div>
        </div>
        
        <div className="pt-6 text-sm text-gray-500">
          <p>Built with Next.js, React, and Tailwind CSS</p>
        </div>
      </div>
    </main>
  )
}