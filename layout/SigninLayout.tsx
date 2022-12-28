import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { login } from '../lib/api'
import { LoginScope } from '../lib/types'
import Swal from 'sweetalert2'
import Link from 'next/link'

export default function SigninLayout({ loginType }: { loginType: LoginScope }) {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()
  // const [rememberMe, setRememberMe] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetch(`${process.env.API_URL}/admin/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          title: 'Success!',
          text: 'You have successfully signed up',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#2F80ED',
        }).then(() => {
          router.push('/admin')
          setEmail('')
          setPassword('')
        })
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong',
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#2F80ED',
        })
        setEmail('')
        setPassword('')
      }
    })
  }

  const handleSubmitStaff = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetch(`${process.env.API_URL}/staff/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
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
          router.push('/staff')
        })
        setEmail('')
        setPassword('')
      })
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err)
        setEmail('')
        setPassword('')
      })
  }

  const handleSubmitStudent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    fetch(`${process.env.API_URL}/users/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          title: 'Success!',
          text: 'You have successfully signed up',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#2F80ED',
        }).then(() => {
          router.push('/student')
        })
        setEmail('')
        setPassword('')
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong',
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#2F80ED',
        })
      }

      res.json().then((data) => {
        localStorage.setItem('tokenUem', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
      })
    })
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
                  Hello admin, Sign in to your account
                </h2>
              </div>
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="email-address" className="sr-only">
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
                    <label htmlFor="password" className="sr-only">
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
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LockClosedIcon
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        aria-hidden="true"
                      />
                    </span>
                    Sign In
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
                      Hello staff, Sign in to your account
                    </h2>
                  </div>
                  <form className="mt-8 space-y-6" onSubmit={handleSubmitStaff}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                      <div>
                        <label htmlFor="email-address" className="sr-only">
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
                        <label htmlFor="password" className="sr-only">
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
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                          <LockClosedIcon
                            className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                            aria-hidden="true"
                          />
                        </span>
                        Sign In
                      </button>
                    </div>
                    {/* sign up option */}
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <div
                          onClick={() =>
                            (window.location.href = '/staff/signup')
                          }
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Do not have an account? Sign up
                        </div>
                      </div>
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
                              Hello Student, Sign in to your account
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
