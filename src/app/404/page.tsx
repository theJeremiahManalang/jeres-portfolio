'use client';

import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// TypeScript Interface for the component props
interface ErrorPageProps {
  statusCode?: number;
}

const QuantumBlackHoleError: NextPage<ErrorPageProps> = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>404: Lost in the Void</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        <div className="text-center max-w-lg">
          
          {/* Main Title and Animated 404 */}
          <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 animate-pulse">
            404
          </h1>
          <p className="mt-4 text-4xl font-light tracking-tight text-gray-300">
            Page not found.
          </p>
          
          {/* Description and Call to Action */}
          <p className="text-lg text-gray-400 mb-6 mt-5">
            The editor is still busy and has not completed this part of the website.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            
            {/* Primary Action: Go Home */}
            <Link 
              href="/" 
              className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-300"
            >
                Return to Homepage
            </Link>

          </div>

          

        </div>
      </div>
    </>
  );
};

// Next.js pages export default
export default QuantumBlackHoleError;

// Optional: Define a simple spin animation in your global CSS file (e.g., globals.css)
/*
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 15s linear infinite;
}
*/