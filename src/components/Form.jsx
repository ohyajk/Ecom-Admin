import React, { useState } from 'react'


const Form = (props) => {

  const { upClick} = props

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [des, setDes] = useState('')
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')
  const [rating, setRating] = useState('')

  const inputModel = {
    Name: name,
    Price: price,
    Description: des,
    Image: image,
    Category: category,
    Rating: rating,
  }

  const link = 'http://localhost:5000/api/v2/add'

  const sendData = async () => {
    await fetch(link, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(inputModel),
    });
    upClick() 
  };

  return (
    <div onSubmit={(e) => {e.preventDefault(); sendData(); e.target.reset(); }} className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold py-2'>ADD Product</h1>
       <form className="flex flex-col gap-4" method="post">
        <input onChange={(e) => setName(e.target.value)} className="px-4 py-2 outline-none" placeholder="Product Name" type="text" required/>
        <input onChange={(e) => setPrice(e.target.value)} className="px-4 py-2 outline-none" placeholder="Product Price" type="number" required/>
        <select onChange={(e) => setCategory(e.target.value)} className="px-4 py-2 outline-none" required>
          <option  value="Electronics">Electronics</option>
          <option  value="Electronics">Electronics</option>
          <option  value="Electronics">Electronics</option>
          <option  value="Electronics">Electronics</option>
          <option  value="Clothing">Clothing</option>
        </select>
        <select onChange={(e) => setRating(e.target.value)} className="px-4 py-2 outline-none" required>
          <option  value="1">1</option>
          <option  value="2">2</option>
          <option  value="3">3</option>
          <option  value="4">4</option>
          <option  value="5">5</option>
        </select>

        <textarea onChange={(e) => setDes(e.target.value)} className="outline-none px-4 py-2" placeholder="Description here..." cols="5" rows="5" required></textarea>
        <input onChange={(e) => setImage(e.target.value)} className="px-4 py-2 outline-none" placeholder="Image Link" type="url" required/>
        <input className="cursor-pointer hover:bg-white hover:text-[#3b3b3b] px-4 py-2 outline-none border-2" type="submit" value="SUBMIT" />
       </form>
      </div>
  )
}

export default Form