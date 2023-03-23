import React, { useState, useEffect } from 'react'
import Form from '../components/Form'
import List from '../components/List'

const Home = () => {
    
  const [upData, setUpData] = useState()

  useEffect(() => {
   fetchData()
}, [])

  const fetchData = async() => {
  const fetchr = await fetch('http://localhost:5000/api/v2/products')
  const res = await fetchr.json()
  setUpData(res)
}

  return (
    <div  className="md:px-20 pt-10 flex flex-col md:flex-row justify-around items-start">
        <Form upClick={fetchData}  />
        <List up={upData} upClick={fetchData} />
    </div>
  )
}

export default Home