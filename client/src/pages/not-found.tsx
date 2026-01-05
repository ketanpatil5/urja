import { Link } from "wouter";
import { AlertTriangle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-50 text-slate-800 p-4">
      <div className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-lg border border-slate-200">
        <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="h-10 w-10 text-yellow-600" />
        </div>
        
        <h1 className="text-4xl font-display font-bold mb-4 text-slate-900">404 Page Not Found</h1>
        <p className="text-slate-500 text-lg mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link href="/">
          <button className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            <Home className="w-5 h-5" /> Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
