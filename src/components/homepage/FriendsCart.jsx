import React, { use, useEffect } from 'react';
import { useState } from 'react';



const FriendsCart = () => {

    const [carts, setCart] = useState([]);
    
    useEffect(()=>{
      const fetchData = async () => {
        const res = await fetch('data.json');
        const data = await res.json();
        setCart(data)
      } ;
      fetchData();
    }, []);
    
   const getStatusStyle = (status) => {
  if (status === "Overdue") {
    return "bg-red-500 text-white";
  } else if (status === "On Track") {
    return "bg-[#244D3F] text-white";
  } else if (status === "Almost Due") {
    return "bg-[#EFAD44] text-white";
  } else {
    return "bg-gray-300";
  }
};

    return (
        <div>
            <div className='container mx-auto card'>
                <div className='text-2xl font-semibold'>
                    <h2>Your Friends</h2>
                </div>
                <div>
                    <div className=' grid grid-cols-4 card py-10 gap-10 '>    
                        {
                            carts.map((cart, ind)=>{
                                return (
                                   <div className=' card items-center shadow p-5 '>
                                    <div className='w-30 h-30 rounded-full overflow-hidden '>
                                         <img src={cart.picture}  alt="" className='w-full h-full object-cover' />
                                     </div>
                                     <div>
                                      <div className='grid gap-2 text-center'>
                                        <h2 className='font-semibold '>{cart.name}</h2>
                                      <p className='opacity-100 '>{cart.daysSince}d ago</p>
                                      <button className='bg-green-200 rounded-2xl p-2 items-center w-30'>{cart.tags}</button>
                                      <button className={`py-2 w-30 rounded-2xl ${getStatusStyle(cart.status)}`}>{cart.status}</button>
                                      
                                      </div>
                                     </div>
                                   </div>
                                )
                                    
                                
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsCart;