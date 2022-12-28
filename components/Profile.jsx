// import { ProfileLogic } from '../js/user.logic'
import React, { useEffect, useState } from 'react'
export default function Profile() {
  const [user, setUser] = useState({})
  //   const { profile } = ProfileLogic()

  // function b64toBlob(b64Data, contentType) {
  //     contentType = contentType || '';
  //     let sliceSize = 512;

  //     var byteCharacters = atob(b64Data);
  //     var byteArrays = [];

  //     for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
  //         var slice = byteCharacters.slice(offset, offset + sliceSize);

  //         var byteNumbers = new Array(slice.length);
  //         for (var i = 0; i < slice.length; i++) {
  //             byteNumbers[i] = slice.charCodeAt(i);
  //         }

  //         var byteArray = new Uint8Array(byteNumbers);

  //         byteArrays.push(byteArray);
  //     }

  //     var blob = new Blob(byteArrays, { type: contentType });
  //     return blob;
  // }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    setUser(user)
  }, [])

  return (
    <div className="mt-4">
      <h2 className="text-lg leading-6 font-medium text-gray-900">Profile</h2>
      {/* image on ledt side */}

      <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ">
                  {/* <img src={user.photo} alt="profile" /> */}
                  <img
                    src={user.photo}
                    alt="profile"
                    className="w-20 h-20 rounded-full"
                  />
                  {/* <img
                    src="https://github.com/madihamallick.png"
                    alt="profile"
                    className="w-20 h-20 rounded-full"
                  /> */}
                </dd>
              </div>
            </dl>
            <dl>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">Name</dt>

                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user.fullName}
                </dd>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">Email</dt>

                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user.email}
                </dd>
              </div>

              {user?.phone && (
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                  <dt className="text-sm font-medium text-gray-500">Phone</dt>

                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user.phone}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
