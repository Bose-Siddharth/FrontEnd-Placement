import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Link
        href="/admin/signin"
        className="text-2xl font-bold text-blue-500 hover:text-blue-700 hover:underline cursor-pointer mb-4"
      >
        Admin
      </Link>
      <Link
        href="/student/signin"
        className="text-2xl font-bold text-blue-500 hover:text-blue-700 hover:underline cursor-pointer mb-4"
      >
        {' '}
        Student{' '}
      </Link>
      <Link
        href="/staff/signin"
        className="text-2xl font-bold text-blue-500 hover:text-blue-700 hover:underline cursor-pointer mb-4"
      >
        {' '}
        Staff{' '}
      </Link>
    </div>
  )
}

export default index
