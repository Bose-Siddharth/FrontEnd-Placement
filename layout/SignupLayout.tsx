import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { login } from '../lib/api'
import { LoginScope } from '../lib/types'
import Swal from 'sweetalert2'

export default function SignupLayout({ loginType }: { loginType: LoginScope }) {
  const [fullName, setFullName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [photo, setPhoto] = useState<String | Blob | null>(null)
  const router = useRouter()

  const [enrollmentNo, setEnrollmentNo] = useState<string>('')
  const [course, setCourse] = useState<string>('')
  const [batch, setBatch] = useState<string>('')
  const [resume, setResume] = useState<String | Blob | null>(null)
  const [attendance, setAttendance] = useState<string>('')
  const [gpa, setGpa] = useState<string>('')
  const [currentAddress, setCurrentAddress] = useState<string>('')
  const [permanentAddress, setPermanentAddress] = useState<string>('')

  // const [rememberMe, setRememberMe] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // convert the photo to base64
    const reader = new FileReader()
    reader.readAsDataURL(photo as Blob)
    reader.onload = () => {
      fetch(`http://localhost:5000/admin/auth/signUp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          password,
          photo: reader.result,
        }),
      })
        .then((res) => {
          Swal.fire({
            title: 'Success!',
            text: 'You have successfully signed up',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#2F80ED',
          }).then(() => {
            router.push('/admin')
          })
          setEmail('')
          setFullName('')
          setPhone('')
          setPassword('')
          setPhoto(null)
        })
        .then((data) => console.log(data))
        .catch((err) => {
          console.log(err)
          setEmail('')
          setFullName('')
          setPhone('')
          setPassword('')
          setPhoto(null)
        })
    }
    reader.onerror = (error) => {
      console.log('Error: ', error)
    }
  }

  const handleSubmitStaff = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // convert the photo to base64
    const reader = new FileReader()
    reader.readAsDataURL(photo as Blob)
    reader.onload = () => {
      fetch(`http://localhost:5000/staff/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          password,
          photo: reader.result,
        }),
      })
        .then((res) => {
          Swal.fire({
            title: 'Success!',
            text: 'You have successfully signed up',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#2F80ED',
          }).then(() => {
            router.push('/staff/signin')
          })
          setEmail('')
          setFullName('')
          setPhone('')
          setPassword('')
          setPhoto(null)
        })
        .then((data) => console.log(data))
        .catch((err) => {
          console.log(err)
          setEmail('')
          setFullName('')
          setPhone('')
          setPassword('')
          setPhoto(null)
        })
    }
    reader.onerror = (error) => {
      console.log('Error: ', error)
    }
  }

  const handleSubmitStudent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // convert the photo to base64
    const reader = new FileReader()
    reader.readAsDataURL(photo as Blob)

    reader.onerror = (error) => {
      console.log('Error: ', error)
    }
    // convert the resume to base64
    const reader1 = new FileReader()
    reader1.readAsDataURL(resume as Blob)
    reader.onload = () => {
      reader1.onload = () => {
        fetch(`http://localhost:5000/users/auth/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName,
            email,
            enrollmentNo,
            course,
            batch,
            photo: reader.result,
            resume: reader1.result,
            attendance,
            gpa,
            currentAddress,
            permanentAddress,
            password,
          }),
        })
          .then((res) => {
            Swal.fire({
              title: 'Success!',
              text: 'You have successfully signed up',
              icon: 'success',
              confirmButtonText: 'OK',
              confirmButtonColor: '#2F80ED',
            }).then(() => {
              router.push('/student/signin')
            })
            setEmail('')
            setFullName('')
            setEnrollmentNo('')
            setCourse('')
            setBatch('')
            setPhoto(null)
            setResume(null)
            setAttendance('')
            setGpa('')
            setCurrentAddress('')
            setPermanentAddress('')
          })
          .then((data) => console.log(data))
          .catch((err) => {
            console.log(err)
            setEmail('')
            setFullName('')
            setEnrollmentNo('')
            setCourse('')
            setBatch('')
            setPhoto(null)
            setResume(null)
            setAttendance('')
            setGpa('')
            setCurrentAddress('')
            setPermanentAddress('')
          })
      }
    }

    reader1.onerror = (error) => {
      console.log('Error: ', error)
    }
  }

  return (
    <>
      {loginType === 'admin' ? (
        <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
              <div>
                <img
                  className="mx-auto h-12 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
                <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
                  Hello admin, Sign Up to your account
                </h2>
              </div>
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="name" className="text-sm text-gray-500">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="name"
                      autoComplete="name"
                      required
                      value={fullName}
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Full Name"
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email-address"
                      className="text-sm text-gray-500"
                    >
                      Email Address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email-address"
                      className="text-sm text-gray-500"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="phone"
                      autoComplete="phone"
                      required
                      value={phone}
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="phone address"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="text-sm text-gray-500">
                      Photo Upload
                    </label>
                    {/* photo upload section */}
                    <input
                      type="file"
                      name="photo"
                      id="photo"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Photo Upload"
                      onChange={(e) =>
                        setPhoto(e.target.files && e.target.files[0])
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="text-sm text-gray-500">
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

              <div className="text-sm text-gray-500">
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
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LockClosedIcon
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        aria-hidden="true"
                      />
                    </span>
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      ) : (
        <>
          {loginType === 'staff' ? (
            <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
              <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                  <div>
                    <img
                      className="mx-auto h-12 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
                      Hello Staff, Sign up to your account
                    </h2>
                  </div>
                  <form className="mt-8 space-y-6" onSubmit={handleSubmitStaff}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                      <div>
                        <label htmlFor="name" className="text-sm text-gray-500">
                          Full Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="name"
                          autoComplete="name"
                          required
                          value={fullName}
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Full Name"
                          onChange={(e) => setFullName(e.target.value)}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email-address"
                          className="text-sm text-gray-500"
                        >
                          Email Address
                        </label>
                        <input
                          id="email-address"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          value={email}
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Email address"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email-address"
                          className="text-sm text-gray-500"
                        >
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="phone"
                          autoComplete="phone"
                          required
                          value={phone}
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="phone address"
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          className="text-sm text-gray-500"
                        >
                          Photo Upload
                        </label>
                        {/* photo upload section */}
                        <input
                          type="file"
                          name="photo"
                          id="photo"
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Photo Upload"
                          onChange={(e) =>
                            setPhoto(e.target.files && e.target.files[0])
                          }
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          className="text-sm text-gray-500"
                        >
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
   
                 <div className="text-sm text-gray-500">
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
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                          <LockClosedIcon
                            className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                            aria-hidden="true"
                          />
                        </span>
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          ) : (
            <>
              {loginType
                ? 'student' && (
                    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-md w-full space-y-8">
                          <div>
                            <img
                              className="mx-auto h-12 w-auto"
                              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                              alt="Workflow"
                            />
                            <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
                              Hello Student, Sign up to your account
                            </h2>
                          </div>
                          <form
                            className="mt-8 space-y-6"
                            onSubmit={handleSubmitStudent}
                          >
                            <input
                              type="hidden"
                              name="remember"
                              defaultValue="true"
                            />
                            <div className="rounded-md shadow-sm -space-y-px">
                              <div>
                                <label
                                  htmlFor="name"
                                  className="text-sm text-gray-500"
                                >
                                  Full Name
                                </label>
                                <input
                                  id="name"
                                  name="name"
                                  type="name"
                                  autoComplete="name"
                                  required
                                  value={fullName}
                                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                  placeholder="Full Name"
                                  onChange={(e) => setFullName(e.target.value)}
                                />
                              </div>

                              <div>
                                <label
                                  htmlFor="email-address"
                                  className="text-sm text-gray-500"
                                >
                                  Email Address
                                </label>
                                <input
                                  id="email-address"
                                  name="email"
                                  type="email"
                                  autoComplete="email"
                                  required
                                  value={email}
                                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                  placeholder="Email address"
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                              </div>

                              <div>
                                <label
                                  htmlFor="enrollmentNo"
                                  className="text-sm text-gray-500"
                                >
                                  Enrollment Number
                                </label>
                                <input
                                  id="enrollmentNo"
                                  name="enrollmentNo"
                                  autoComplete="enrollmentNo"
                                  required
                                  value={enrollmentNo}
                                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                  placeholder="Enrollment Number"
                                  onChange={(e) =>
                                    setEnrollmentNo(e.target.value)
                                  }
                                />
                              </div>

                              <div>
                                <label
                                  htmlFor="course"
                                  className="text-sm text-gray-500"
                                >
                                  Course
                                </label>
                                <input
                                  id="course"
                                  name="course"
                                  autoComplete="course"
                                  required
                                  value={course}
                                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                  placeholder="Course"
                                  onChange={(e) => setCourse(e.target.value)}
                                />
                              </div>

                              <div>
                                <label
                                  htmlFor="batch"
                                  className="text-sm text-gray-500"
                                >
                                  Batch
                                </label>
                                <input
                                  id="Batch"
                                  name="Batch"
                                  autoComplete="Batch"
                                  required
                                  value={batch}
                                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                  placeholder="Batch"
                                  onChange={(e) => setBatch(e.target.value)}
                                />
                              </div>

                              <div>
                                <label
                                  htmlFor="photo"
                                  className="text-sm text-gray-500"
                                >
                                  Photo Upload
                                </label>
                                {/* photo upload section */}
                                <input
                                  type="file"
                                  name="photo"
                                  id="photo"
                                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                  placeholder="Photo Upload"
                                  onChange={(e) =>
                                    setPhoto(
                                      e.target.files && e.target.files[0]
                                    )
                                  }
                                />
                              </div>

                              <div>
                                <label
                                  htmlFor="resume"
                                  className="text-sm text-gray-500"
                                >
                                  Resume
                                </label>
                                {/* photo upload section */}
                                <input
                                  type="file"
                                  name="Resume"
                                  id="Resume"
                                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                  placeholder="Resume Upload"
                                  onChange={(e) =>
                                    setResume(
                                      e.target.files && e.target.files[0]
                                    )
                                  }
                                />
                              </div>
                              <div>
                                <label
                                  htmlFor="attendance"
                                  className="text-sm text-gray-500"
                                >
                                  Attendance
                                </label>
                                <input
                                  id="attendance"
                                  name="attendance"
                                  type="number"
                                  autoComplete="attendance"
                                  required
                                  value={attendance}
                                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                  placeholder="Attendance"
                                  onChange={(e) =>
                                    setAttendance(
                                      e.target.value && e.target.value
                                    )
                                  }
                                />
                              </div>

                              <div>
                                <label
                                  htmlFor="gpa"
                                  className="text-sm text-gray-500"
                                >
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
                                <label
                                  htmlFor="current-address"
                                  className="text-sm text-gray-500"
                                >
                                  current Address
                                </label>
                                <input
                                  id="current-address"
                                  name="current"
                                  autoComplete="current"
                                  required
                                  value={currentAddress}
                                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                  placeholder="current address"
                                  onChange={(e) =>
                                    setCurrentAddress(e.target.value)
                                  }
                                />
                              </div>

                              <div>
                                <label
                                  htmlFor="Permanent-address"
                                  className="text-sm text-gray-500"
                                >
                                  Permanent Address
                                </label>
                                <input
                                  id="Permanent-address"
                                  name="Permanent"
                                  autoComplete="Permanent"
                                  required
                                  value={permanentAddress}
                                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                  placeholder="Permanent address"
                                  onChange={(e) =>
                                    setPermanentAddress(e.target.value)
                                  }
                                />
                              </div>

                              <div>
                                <label
                                  htmlFor="password"
                                  className="text-sm text-gray-500"
                                >
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

              <div className="text-sm text-gray-500">
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
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                  <LockClosedIcon
                                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                    aria-hidden="true"
                                  />
                                </span>
                                Sign Up
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </section>
                  )
                : null}
            </>
          )}
        </>
      )}
    </>
  )
}
