import React from "react";
import {Switch, Route} from 'react-router-dom';

const Recipe = ({name, img}) => {
    return (
        <div>
            <h1>{name}</h1>
            <img src={img}/>
            
        </div>
    );
}


