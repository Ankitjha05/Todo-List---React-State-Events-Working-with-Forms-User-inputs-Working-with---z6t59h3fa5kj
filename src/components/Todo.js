import React, { useState } from 'react'
import List from './List'

export default function Todo() {
    const [text, settext] = useState();
    const [listitem, setlistitem] = useState([]);

    const handleClick = () => {
        setlistitem((listitem) => listitem.concat(text));
        settext("")

    }
    const handleChange = (e) => {
        
        settext(e.target.value);
    }
    return (
        <div>
            <ul>
                {listitem.length != 0 && listitem.map((items) => {
                  return (<List key={items} items={items} />)
                })}
            </ul>
            <textarea id='task' onChange={handleChange} value={text}></textarea>
            <button id='btn' onClick={()=>handleClick()}>Add</button>
        </div>
    )
}
