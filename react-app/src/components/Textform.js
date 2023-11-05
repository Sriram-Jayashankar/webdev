import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
    const [text,settext]= useState('');
    const touppercasefn=()=>
    {   
        // string var=text.toUpperCase
        settext(text.toUpperCase());
    }
    const addnamefn=()=>
    {
        settext(text+"hellohomie");
    }
    const onchangefn=(event)=>{
        settext(event.target.value)
    }
  return (
        <div className='container my-3' >
        <div className="form-group">
            <h1>
                {props.startingtext}
            </h1>
        <textarea className="form-control" value={text} onChange={onchangefn} placeholder="Recipient's username" id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={touppercasefn}>Convert to upper Case</button>
        <button className="btn btn-primary mx-3" onClick={addnamefn}>Hello HOmie</button>
        <div className="container">
            <h1>summary</h1>
            <p>{text.split("/s/").length}+words+{text.length}+letters
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