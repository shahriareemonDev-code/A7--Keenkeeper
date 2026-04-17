import React from 'react';

const YourFriends = () => {
  return (
    <div className="max-w-[80%] mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-10">


        <div className=" rounded-xl p-6 text-center shadow-sm">
          <h1 className="text-4xl font-bold text-gray-700">12</h1>
          <p className="text-gray-500 mt-2">Total Friends</p>
        </div>

        <div className=" rounded-xl p-6 text-center shadow-sm">
          <h1 className="text-4xl font-bold text-gray-700">3</h1>
          <p className="text-gray-500 mt-2">On Track</p>
        </div>

        <div className=" rounded-xl p-6 text-center shadow-sm">
          <h1 className="text-4xl font-bold text-gray-700">5</h1>
          <p className="text-gray-500 mt-2">Overdue </p>
        </div>


        <div className=" rounded-xl p-6 text-center shadow-sm">
          <h1 className="text-4xl font-bold text-gray-700">4</h1>
          <p className="text-gray-500 mt-2">Almost Due </p>
        </div>
      
      </div>
    </div>
  );
};

export default YourFriends;