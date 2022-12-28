import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

export default function NoticeUpload() {
  const [title, setTitle] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [noticePdf, setNoticepdf] = useState<File | null>(null)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const reader = new FileReader()
    reader.readAsDataURL(noticePdf as Blob)
    reader.onload = () => {
      fetch(`${process.env.API_URL}/notice/post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          password,
          noticePdf: reader.result,
        }),
      }).then((res) => {
        Swal.fire({
          title: 'Success!',
          text: 'You have successfully added a notice',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#2F80ED',
        }).then(() => {
          router.push('/admin')
        })
      })
    }
  }

  return (
    <section className=" flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
              Hello admin, Add Notice
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="title" className="text-sm text-gray-400">
                  Title of Notice
                </label>
                <input
                  id="title"
                  name="title"
                  autoComplete="title"
                  required
                  value={title}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Title of Notice"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password" className="text-sm text-gray-400">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="Notice Pdf" className="text-sm text-gray-500">
                  Notice Pdf
                </label>
                {/* photo upload section */}
                <input
                  type="file"
                  name="Notice Pdf"
                  id="Notice Pdf"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Notice Pdf Upload"
                  onChange={(e) =>
                    setNoticepdf(e.target.files && e.target.files[0])
                  }
                />
              </div>
            </div>

            {/* <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div> */}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Notice
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
