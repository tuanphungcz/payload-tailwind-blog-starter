import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="mt-20 container mx-auto flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-6">Page Not Found</h2>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
      >
        Go back home
      </Link>
    </div>
  )
}

export default NotFound
