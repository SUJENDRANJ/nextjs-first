import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Welcome to <span className="text-blue-600">MyApp</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Start building your next great project with Next.js
        </p>
      </div>

      <div className="mt-12 relative h-64 md:h-96">
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Hero Image"
          fill
          className="object-cover rounded-lg shadow-xl"
          priority
        />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-900">Fast Performance</h3>
          <p className="mt-2 text-gray-500">
            Built with performance in mind for the best user experience.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-900">SEO Optimized</h3>
          <p className="mt-2 text-gray-500">
            Designed with SEO best practices for better visibility.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-900">Modern Design</h3>
          <p className="mt-2 text-gray-500">
            Beautiful and responsive design that works on all devices.
          </p>
        </div>
      </div>
    </div>
  );
}