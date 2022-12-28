import { useEffect, useState } from 'react'

export const StaffLogic = () => {
  const [staffsDetail, setstaffsDetail] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/staff/auth/allusers`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setstaffsDetail(data.staff)
        console.log(data.staff)
      })
      .catch((err) => console.log(err))
  }, [])

  return { staffsDetail }
}
