import "./project.css";
import React from "react";

const Main=() =>{
    return(
        <div className="header">
            <h1 className="text-7xl italic mt-16 text-emerald-900">Snap. https://github.com/ShivanshikaAgarwal1505/Snaps.git</h1>
            
            <form>
                <input type="search" className="w-64 rounded-md border-4 border-emerald-900	form-input"></input>
            </form>
        </div>
    );
}

export default Main;