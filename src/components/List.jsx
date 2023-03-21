import React, { useState, useEffect } from 'react'


export const fetchAgain = () => {
  fetchData()
}

const List = () => {
  
  const [data, setData] = useState()
  
  useEffect(() => {
    fetchData()
  },[])
  
  const fetchData = async() => {
    const fetchr = await fetch('http://localhost:5000/api/v2/products')
    const res = await fetchr.json()
    setData(res)
  }

 const deleteData = async (id) => {
    await fetch(`http://localhost:5000/api/v2/del/${id}`, {
      method: 'DELETE',
    });
  };
  

  console.log(data)

  return (
    <div>
        <h1 className='text-3xl font-bold py-2'>Product List</h1>

        <div className='flex flex-col justify-center items-center'>
            {
                data?.map((p) => {
                    return <div className='flex justify-around items-center'>{p.Name} <span onClick={() => {deleteData(p._id); fetchData()} } >Delete</span></div>
                })
            }
        </div>
    </div>
  )
}

export default List