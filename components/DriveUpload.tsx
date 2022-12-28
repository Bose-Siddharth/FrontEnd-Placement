import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

export default function DriveUpload() {
  const [companyName, setCompanyName] = useState<string>('')
  const [attendance, setAttendance] = useState<string>('')
  const [gpa, setGpa] = useState<string>('')
  const [noticePdf, setNoticepdf] = useState<File | null>(null)
  const [assessmentPdf, setAssessmentPdf] = useState<File | null>(null)
  const [password, setPassword] = useState<string>('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.readAsDataURL(noticePdf as Blob)

    reader.onerror = (error) => {
      console.log('Error: ', error)
    }
    // convert the resume to base64
    const reader1 = new FileReader()
    reader1.readAsDataURL(assessmentPdf as Blob)
    reader.onload = () => {
      reader1.onload = () => {
        fetch(`http://localhost:5000/placement/apply`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            companyName,
            attendance,
            gpa,
            noticePdf: reader.result,
            assessmentPdf: reader1.result,
            password,
          }),
        }).then((res) => {
          Swal.fire({
            title: 'Success!',
            text: 'You have successfully added a placement',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#2F80ED',
          }).then(() => {
            router.push('/admin')
          })
        })
      }
    }
  }

  return (
    <section className=" flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
              Hello admin, Add Drive
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="company" className="text-sm text-gray-400">
                  Company Name
                </label>
                <input
                  id="company"
                  name="company"
                  autoComplete="company"
                  required
                  value={companyName}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Company Name"
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="attendance" className="text-sm text-gray-400">
                  Attendance
                </label>
                <input
                  id="attendance"
                  name="attendance"
                  autoComplete="attendance"
                  required
                  value={attendance}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Company Name"
                  onChange={(e) => setAttendance(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="gpa" className="text-sm text-gray-400">
                  Gpa
                </label>
                <input
                  id="gpa"
                  name="gpa"
                  autoComplete="gpa"
                  required
                  value={gpa}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Gpa"
                  onChange={(e) => setGpa(e.target.value)}
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

              <div>
                <label
                  htmlFor="Assessment Pdf"
                  className="text-sm text-gray-500"
                >
                  Assessment Pdf
                </label>
                {/* photo upload section */}
                <input
                  type="file"
                  name="Assessment Pdf"
                  id="Assessment Pdf"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Assesssment Pdf Upload"
                  onChange={(e) =>
                    setAssessmentPdf(e.target.files && e.target.files[0])
                  }
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
                Add Drive
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
