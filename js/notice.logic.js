import { useEffect, useState } from 'react'

export const NoticeLogic = () => {
  const [notices, setNotices] = useState([])

  useEffect(
    () => {
      fetch(`http://localhost:5000/notice/get`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setNotices(data)
          console.log(data)
        })
        .catch((err) => console.log(err))
    },
    // once the page loads, the useEffect will run only once
    []
  )

  return { notices }
}
