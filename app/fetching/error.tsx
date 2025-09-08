"use client"



import { useEffect } from "react"   

const Error = ({error,reset}: {error:Error;reset: () => void}) => {
    useEffect(() => {
        console.error(error);
    }, [error]);
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
        <p className="text-red-500">Something went wrong: {error.message}</p>
        <button
            onClick={() => reset()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
            Try again
        </button>
    </div>
  )
}

export default Error