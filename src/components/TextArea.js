import React, {useState} from "react";

export default function TextArea(props) {
 

  const textUpperCase = () =>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const textLowerCase = () =>{
    let lowerText = text.toLowerCase();
    setText(lowerText);
  }
  const copyText = () =>{
    let copyText = document.getElementById('exampleFormControlTextarea1');
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  
  }
  //handle extra space function
  const removeExtraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const clearText =()=>{
    setText("");
  }
  const textOnChange = (e) =>{
    setText(e.target.value)
  }
  //setText()
  const[text, setText] = useState("")
  return (
    <div className="container" style={{color: props.mode === 'dark'? "white" : "black"}} >
      <h1>{props.headline}</h1>
      <div className="mb-3">
           <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'? '#262626': 'white',
         color:props.mode ==='dark'? 'white' : 'black'}} value= {text} onChange={textOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button className={`btn btn-${props.mode} mx-3 `} onClick={textUpperCase}>Convert to Uppercase</button>
      <button className={`btn btn-${props.mode} mx-3 `} onClick={textLowerCase}>Convert to Lowercase</button>
      <button className={`btn btn-${props.mode} mx-3 `}  onClick={copyText}>Copy text</button>
      <button className={`btn btn-${props.mode} mx-3 `}   onClick={clearText} >clear text</button>
      <button className={`btn btn-${props.mode} mx-3 `}  onClick={removeExtraSpace}>Remove Extra space</button>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <h6>{text.split(" ").length} words, {text.length} characters</h6>
        <p> {0.008 * text.split(" ").length}Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0? text : "please enter some text above text area to see preview"}</p>

      </div>
    </div>
  );
}
