import React from "react";

const Tabs =()=>{
    return (
      <div className="tabs grid grid-cols-4 gap-16 mt-7">
        <div className="bg-emerald-900 text-red-100 px-5 py-1 rounded justify-center flex align-middle hover:cursor-pointer">
          <a>Mountain</a>
        </div>
        <div className="bg-emerald-900 text-red-100 px-5 py-1 rounded justify-center flex align-middle hover:cursor-pointer">
          <a>Beaches</a>
        </div>
        <div className="bg-emerald-900 text-red-100 px-5 py-1 rounded justify-center flex align-middle hover:cursor-pointer">
          <a>Food</a>
        </div>
        <div className="bg-emerald-900 text-red-100 px-5 py-1 rounded justify-center flex align-middle hover:cursor-pointer">
          <a>Birds</a>
        </div>
      </div>
    );
}

export default Tabs;