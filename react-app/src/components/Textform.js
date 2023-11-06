import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
    const [text,settext]= useState('');

    const touppercasefn=()=>
    {   
        // string var=text.toUpperCase
        settext(text.toUpperCase());
        props.putalertfn("changed to uppercase","success")
    }
    const addnamefn=()=>
    {
        settext(text+"hellohomie");
    }
    const onchangefn=(event)=>{
        settext(event.target.value)
    }
    const copytoclipboard=()=>{
        navigator.clipboard.writeText(text);
        props.putalertfn("copied to clipboard","success")

    }
  return (
        <div className='container my-3'style={{
        backgroundColor: props.mode==="light"?"white":"black",
        color:props.mode==="light"?"black":"white"
        }} >
        <div className="form-group">
            <h1>
                {props.startingtext}
            </h1>
        <textarea className="form-control " style={{
        backgroundColor: props.mode==="light"?"white":"grey",
        color:props.mode==="light"?"black":"white"
        }} value={text} onChange={onchangefn} placeholder="Recipient's username" id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={touppercasefn}>Convert to upper Case</button>
        <button className="btn btn-primary mx-3" onClick={addnamefn}>Hello HOmie</button>
        <button className="btn btn-primary mx-3" onClick={copytoclipboard}>clipboardcopy</button>

        <div className="container">
            <h1>summary</h1>
            <p>{text.split(/[ ]+/).length}+words+{text.length}+letters
            </p>
        </div>
        </div>
  )
}

Textform.propTypes={
    startingtext:PropTypes.string
}

Textform.defaultProps={
    startingtext:"Enter starting text"
}