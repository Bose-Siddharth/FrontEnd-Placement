import { useEffect, useState } from 'react'

export const DriveLogic = () => {
  const [drives, setDrives] = useState([])

  useEffect(
    () => {
      fetch(`${process.env.API_URL}/placement/get`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setDrives(data)
          console.log(data)
        })
        .catch((err) => console.log(err))
    },
    // once the page loads, the useEffect will run only once
    []
  )

  return { drives }
}
