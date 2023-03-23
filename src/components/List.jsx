import React from 'react'

const List = (props) => {

  const { up, upClick } = props


  const deleteData = async (id) => {
    await fetch(`http://localhost:5000/api/v2/del/${id}`, {
      method: 'DELETE',
    });
    upClick()
  };

  return (
    <div>
      <h1 className='text-3xl font-bold py-2'>Product List</h1>

      <div className='flex flex-col justify-center items-center'>
        {
          up?.map((p) => {
            return (<div className='flex justify-around items-center bg-[#3b3b3b] p-2 gap-2'>
              <img className='h-20' src={p.Image} alt={p.Name} />
              <div>
              <h1 className='text-xl font-semibold'>{p.Name}</h1>
              <h4>{p.Price}$</h4>
              <h4>{p.Rating}Stars</h4>
              </div>
              <span onClick={() => { deleteData(p._id); }} >
              <i className="cursor-pointer px-2 fa-2x fa-solid fa-trash-can"></i>
              </span>
            </div>)
          })
        }
      </div>
    </div>
  )
}

export default List