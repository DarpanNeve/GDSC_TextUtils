import React ,{ useState } from 'react'


export default function TextForm(props) {
    
        const toupcase = () =>{
            // console.log("Button is clicked" + text);
            let newtext = text.toUpperCase();
            setText(newtext);
            props.showalert("Converted to Upppercase","success");
          }
          
          const tolowcase = () =>
          {
            let newtext = text.toLowerCase();
            setText(newtext);
            props.showalert("Converted to Lowercase","success");
          }
          
          const onchagedone = (event) =>{
            // console.log("ON change is done");
            setText(event.target.value);
          }
          
          const tocopy = () =>
          {
            let text = document.getElementById("mytext");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showalert("Copied Successfull","success");
          }
          
          const toclear = () =>
          {
            setText("");
            props.showalert("Text Cleared","success");
          }

          let mystyle =
          {
            color:props.mode==='dark'?'white':'#234b70',
            backgroundColor:props.mode==='dark'?'#234b70':'white',
            border:props.mode==='dark'?'2px solid white':'2px solid #234b70'
          }

        

    const [text, setText] = useState('');
  return (
    <>
    <div className="container">
<div className="mb-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} id="mytext" rows="8" onChange={onchagedone} style={mystyle}></textarea>
</div>
<button className="btn btn-primary mx-3 my-3" onClick={toupcase}>Convert To Uppercase</button>
<button className="btn btn-primary mx-3 my-3" onClick={tolowcase}>Convert To Lowercase</button>
<button className="btn btn-primary mx-3 my-3" onClick={toclear}>Clear</button>
<button className="btn btn-primary mx-3 my-3" onClick={tocopy}>Copy Text</button>
</div>
<div className="container my-5">
    <h1>This is the summary</h1>
    <p>There are {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>Time to taken read :{(text.split(" ").filter((element)=>{return element.length!==0}).length)*0.008} minutes</p>
    <h4>Preview:</h4>
    <p>{text.length>0?text:"Enter the text to get the preview"}</p>
</div>
</>
  )
}
