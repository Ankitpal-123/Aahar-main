import React from 'react'

const foodList = [
    {
      image: "https://gdurl.com/zqD2",
      name: "Mattar Paneer",
    },
    {
      image: "https://gdurl.com/Xa2U",
      name: "Pav Bhaji",
    },
    {
      image: "https://gdurl.com/7Uf7P",
      name: "Biryani",
    },
    {
      image: "https://gdurl.com/foc1",
      name: "Aloo Paratha",
    },
    {
      image: "https://gdurl.com/zqD2",
      name: "Mattar Paneer",
    },
    {
      image: "https://gdurl.com/Xa2U",
      name: "Pav Bhaji",
    },
    {
      image: "https://gdurl.com/7Uf7P",
      name: "Biryani",
    },
    {
      image: "https://gdurl.com/foc1",
      name: "Aloo Paratha",
    },
    {
      image: "https://gdurl.com/zqD2",
      name: "Mattar Paneer",
    },
    {
      image: "https://gdurl.com/Xa2U",
      name: "Pav Bhaji",
    },
    {
      image: "https://gdurl.com/7Uf7P",
      name: "Biryani",
    },
    {
      image: "https://gdurl.com/foc1",
      name: "Aloo Paratha",
    },
  ];

const Gallery = () => {
  return (
    <>
    <div className='grid grid-cols-8 gap-4 place-items-center mx-5 my-5'>
         {foodList.map((food) => {
              return (
                <div className="bg-orange-300 rounded-xl w-40 h-40">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-40 h-40 object-center duration-500 ease-in-out brightness-75 hover:brightness-100  hover:scale-110  rounded-xl "
                  />
                  
                </div>
              );
            })}
         </div>
    </>
  )
}

export default Gallery