import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("uppercase was Clicked" + text);
    const newText = text.toUpperCase();
    setText(newText)
  }
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value)
  }

  const handleloClick = () => {
    console.log("lower Case Was Clicked" + text);
    const textlower = text.toLowerCase();
    setText(textlower)
  }

  const [text, setText] = useState( );
  // setText('');
  return (
    <>
    <div>
    <h1>{props.Email}</h1>
        <div className="mb-5">
  {/* <label for="exampleFormControlInput1" className="form-label"></label> */}
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
   <h1>{props.heading}</h1>
  {/* <label for="exampleFormControlTextarea1" className="form-label"></label> */}
  <textarea className="form-control" value={text} onChange = {handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
{/* <button> convert in upper case </button> */}
  <button className="btn btn-primary mx-1" onClick={handleUpClick} >convert to upper case</button>
  <button className="btn btn-secondary mx-1" onClick={handleloClick} >convert to lower case</button>
    </div>
    <div className="container my-3">
      <h1> Above Summary </h1>
      <p> {} word and {} character</p> 
    </div>
    </>
  )
}
 