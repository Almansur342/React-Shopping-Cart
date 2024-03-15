import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import SingleProduct from './componenets/SingleProduct/SingleProduct';
function App() {

  const [cards, setCards] = useState([]);
  const [carts, setCarts] = useState([]);


  useEffect(() => {
    fetch('fakeData.json')
      .then(res => res.json())
      .then(data => setCards(data))
  }, [])

  const handleCart  = product => {
  const isExist = carts.find((cart) => cart.id == product.id);
  if(!isExist){
   const newCart = [...carts,product];
   setCarts(newCart);
  }else{
    alert("already in cart")
  }
  }
   
  return (
    <>
      <div className='flex justify-around p-10'>
        <div className='grid grid-cols-3 gap-8'>
          {
            cards.map(card => <SingleProduct
               key={card.id}
                card = {card}
                handleCart = {handleCart}
                ></SingleProduct>)
          }
          
        </div>
        {/* cart */}
        <div className=''>
        <h1 className='text-3xl font-bold'>This is cart</h1>
        <div className=' flex justify-around gap-32'>
          <h3>name</h3>
          <h3>price</h3>
        </div>
        <div>
           {
            carts.map(cart => (
              <div key={cart.id} className='flex justify-between'>
                <h3>{cart.title.slice(0,4)}</h3>
                <h3>{cart.price}</h3>
                <button className='btn'>Delete</button>
              </div>
            ))
           }
        </div>
        </div>
      </div>
    </>
  )
}
export default App
