// Filename - index.js

import React from 'react';
import ReactDOM from 'react-dom';

// Component that will return an
// unordered list
function Navmenu(props)
{
    const list = props.menuitems;

    const updatedList = list.map((listItems)=>{
        return <li>{listItems}</li>;
    });

    return(
      <h5>
        <ul>{updatedList}</ul>
        </h5>
    );
}

const menuItems = [1,2,3,4,5];

ReactDOM.render(
    <Navmenu menuitems = {menuItems} />, 
    document.getElementById('root')
);
