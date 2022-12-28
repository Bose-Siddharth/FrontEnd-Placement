import { useEffect, useState } from 'react'

export const ProfileLogic = () => {
  const [profile, setProfile] = useState([])

  useEffect(
    () => {
      fetch(`${process.env.API_URL}/users/63aab2e69a10e2c153e02195`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProfile(data.user)
          console.log(data.user)
        })
        .catch((err) => console.log(err))
    },
    // once the page loads, the useEffect will run only once
    []
  )

  return { profile }
}
