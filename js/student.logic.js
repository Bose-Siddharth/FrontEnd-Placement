import { useEffect, useState } from 'react'

export const StudentLogic = () => {
  const [studentsDetail, setStudentsDetail] = useState([])

  useEffect(() => {
    fetch(`${process.env.API_URL}/users/auth/allusers`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setStudentsDetail(data.users)
        console.log(data.users)
      })
      .catch((err) => console.log(err))
  }, [])

  return { studentsDetail }
}
