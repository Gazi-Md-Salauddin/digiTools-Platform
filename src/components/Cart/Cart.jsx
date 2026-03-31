import React from 'react'

const Cart = ({ carts, setCarts }) => {
  
    {/*total price calculate*/}
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0).toFixed(2)
  return (
    
    <div className="mx-4">
      
         {/*cart title and description*/}
      <div className="text-center mt-8 space-y-2 mb-4">
        <h1 className="text-2xl font-bold">Premium Digital Tools</h1>
        <p>Choose from our curated collection of premium digital products designed<br></br>to boost your productivity and creativity.</p>
      </div>
      <h1 className="text-2xl font-bold ">Your Carts</h1>
      {carts.length === 0 ? (
      <h1 className="text-3xl font-bold text-center m-8">Your Cart is empty</h1>
      ) : (
      
        carts.map((item) => ( <div key={item.id} className="flex justify-between items-center p-14 mx-6 mt-8 border border-gray-400 rounded-md">
          <div>
            <h1 className="text-black text-2xl">{item.name}</h1>
            <p className="text-black ">${item.price}/Mo</p>
          </div>
              
              {/*delete button*/}
          <div className="text-red-500">
            <button>Delete</button>
          </div>
          
        </div>
          
        ))
      )
      }
      
      
      {carts.length > 0 && (
      <div className="flex justify-between py-6 px-8">
        <p>Total</p>
        <p>${totalPrice}</p>
      </div>
      )}
      
        {/*checkout button*/}
      {carts.length > 0 && (
      <button className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full btn-block text-white">Proceed to Checkout</button>
      )}
    </div>
  )
}

export default Cart