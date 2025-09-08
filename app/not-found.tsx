
import Link from "next/link"
const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-6 h-screen'>
        <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4">The page you are looking for does not exist.</p>
        <Link href="/" className="text-blue-500 hover:underline mt-4 inline-block">
            Go back to home
        </Link>

    </div>
  )
}

export default NotFound