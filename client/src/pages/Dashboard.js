import React from 'react'
import { useEffect } from 'react'


const Dashboard = () => {

  const fetchData = async () =>  {
    try {
      const response = await fetch('/api/v1')
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect( () => {
    fetchData()
  })

  return (
    <div>Dashboard3</div>
  )
}

export default Dashboard