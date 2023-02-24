import React from "react";
import './styles/Logos.css'

function Logos (){
    return(
        <div className="warp">
            <img className="Logo" src={require('./assets/sepi.webp')} />
            <img className="Logo" src={require('./assets/ATLaurian.webp')} />
        </div>
    )
}

export default Logos