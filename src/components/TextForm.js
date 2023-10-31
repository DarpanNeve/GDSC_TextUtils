import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./TextForm.css";
// console.log()
export default function TextForm(props) {

  
  const handleUpClick = () => {
    // console.log("UpperCase was clicked",+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!","success");
  };
  const handleUpClicklower = () => {
    // console.log("UpperCase was clicked",+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","success");
  };
  const handleUpClickClear = () => {
    // console.log("UpperCase was clicked",+text);
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  const handleCopy=()=>{
    var textbhai= text;
    navigator.clipboard.writeText(textbhai);
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    console.log(newText);
    setText(newText.join(" "));
  }
  const HES=()=>{
    let newText=text.split(/[ ]+/);
    let x=newText.length-1;
    if(newText[x]===""){
   return newText.length-1;
  }
  return newText.length;
}
  const handleFirstletter=()=>{
    // let newText=text.split(/[ ]+/);
    let newText="";
    for(let i=0;i<text.length;i++){
      if(i==0){
        newText+=text[i].toUpperCase();
        continue;
      }
      if(text[i]=="."&&i+1<text.length){
        newText+=text[i];
        newText+=text[i+1].toUpperCase();
        i++;
      }
      else{
        newText+= text[i];
      }
    }
    setText(newText);
  }
  return (
    <>
      <div className="container" >
        <h1 className={`head_class_pro text-${props.mode=='light'?'black':'black'}`} style={{border: `2px solid ${props.mode=='light'?'black':'white'}`}}>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className={`form-control bg-${props.mode} text-${props.mode=='light'?'dark':'light'}`}
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary btnproper" 
         id="myBtn1" onClick={handleUpClick}>
          Convert TO UpperCase
        </button>
        <button
          className="btn btn-primary btnproper"
          onClick={handleUpClicklower}
          id="myBtn2"
        >
          Convert TO LowerCase
        </button>
        <button
          className="btn btn-primary btnproper"
          onClick={handleUpClickClear}
          id="myBtn3"
        >
          Clear Text
        </button>
        <button
          className="btn btn-primary btnproper"
          onClick={handleCopy}
          id="myBtn4"
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary btnproper"
          onClick={handleExtraSpaces}
          id="myBtn5"
        >
          Remove Extra Spaces
        </button>
        <button
          className="btn btn-primary btnproper"
          onClick={handleFirstletter}
          id="myBtn6"
        >
          Handle First Letter
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text summary</h2>
        <p>
          {HES()} words and {text.length} characters
        </p>
        {/* text.split(" ").join('').length */}
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the text box above to preview it "}</p>
      </div>
    </>
  );
}
