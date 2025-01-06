'use client'

import {useEffect} from 'react'

export default function Error({error, reset,}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
      <div className='m-auto'>
        <h2>Something went wrong!</h2>
        <button className='bg-red-300 p-1 rounded' onClick={() => reset()}>
          Try again
        </button>
      </div>
  )
}