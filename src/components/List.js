import React,{useState} from 'react'

export default function List(props) {
    const [text, setText] = useState(props.items);
    const [state, setstate] = useState(false);
    const [style, setstyle] = useState("block");

    const handleonChange = (e) =>{
        setText(e.target.value)
    }
    const getLen = (string)=>{
        if(string.length ===0) return true;
        return false;
    }
    const handleonclick = (e) =>{
        if (e.target.name === 'edit') {
            setstate((prev) => prev=true);
        }
        if (e.target.name === "save") {
            setstate((prev) => prev=false);
        }
        if(e.target.name === "delete")
        setstyle("none")
    }
  return (
    <div style={{display:style}}>
        <li className='list'>
            {state && <><textarea className='editTask ' value={text} onChange={handleonChange}></textarea>
            <button className='saveTask' disabled={getLen(text)} name='save' onClick={handleonclick}>Save</button></>}
            {!state && text}
        </li>
        <button  className='edit' name='edit' onClick={handleonclick}>Edit</button>
        <button className='delete' name='delete' onClick={handleonclick}>Delete</button>
    </div>
  )
}
