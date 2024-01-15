import "./project.css";
import React from "react";
import Search from "./search";
import Tabs from "./tabs";
function SearchBar() {
  
}
const Main=() =>{
    
    return (
      <div>
        <div className="header">
            <h1 className="text-7xl italic mt-16 text-emerald-900">Snaps.</h1>

            <Search></Search>
            <Tabs></Tabs>
          
        </div>

        <div className="body">

        </div>
      </div>
    );
}

export default Main;