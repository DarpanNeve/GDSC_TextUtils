import React from 'react'


    export default function About(props) {
        // const [mystyle,setmystyle] =useState({
        //     color:'black',
        //     backgroundColor:'white',
        //     border:'3px solid white'
        // })

        // const totogglestyle = ()=>{
        //     if(mystyle.color==='black')
        //     {
        //         setmystyle({
        //             color:'white',
        //             backgroundColor:'black',
        //             border:'2px solid white'
        //         })
        //     }
        //     else{
        //         setmystyle({
        //             color:'black',
        //             backgroundColor:'white',
        //             border:'2px solid black'
        //         })
        //     }        
        // }

        let mystyle =
        {
          color:props.mode==='dark'?'white':'black',
          backgroundColor:props.mode==='dark'?'black':'white',
          border:props.mode==='dark'?'2px solid white':'2px solid black'
        }



  return (
    <>
    <div className="container my-4" style ={mystyle} >
    <div className="accordion" id="accordionExample" >
  <div className="accordion-item my-3">
    <h2 className="accordion-header " id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style ={mystyle}>
        <strong>Welcome to Text Utility</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show " aria-labelledby="headingOne" data-bs-parent="#accordionExample" style ={mystyle}>
      <div className="accordion-body" style ={mystyle}>
        Text Utility is a simple yet handy tool designed to assist you in manipulating and analyzing text quickly and effectively. Whether you need to change the letter case of your text, clear it for a fresh start, or obtain insights into its structure, we've got you covered.
      </div>
    </div>
  </div>
  <div className="accordion-item my-3">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style ={mystyle}>
        <strong>Features:</strong> 
        
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style ={mystyle}>
      <div className="accordion-body" style ={mystyle}>
      <strong>Convert to Uppercase:</strong> Easily convert your text to uppercase letters.<br/>
      <strong>Convert to Lowercase:</strong> Quickly transform your text to lowercase letters.<br/>
      <strong>Clear Text:</strong>Start fresh by clearing the text area with a single click.<br/>
      <strong>Copy Text:</strong> Copy the text in the text area to your clipboard effortlessly.<br/>

      </div>
    </div>
  </div>
  <div className="accordion-item my-3">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style ={mystyle}>
        <strong>Text Insights:</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style ={mystyle}>
        <strong> Word Count: </strong>Find out how many words are in your text, which can be useful for analyzing content length.<br/>

        Character Count: Discover the total number of characters in your text, including spaces.<br/>

        Estimated Reading Time: Get an approximate idea of how long it might take to read your text based on an average reading speed.<br/>
      </div>
    </div>
  </div>
</div>

{/* <button onClick={totogglestyle} className="btn btn-primary mx-4 my-3">Change Mode</button> */}
</div>

</>
  )
}
